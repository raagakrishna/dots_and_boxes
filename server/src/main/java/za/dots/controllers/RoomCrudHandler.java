package za.dots.controllers;

import io.javalin.http.BadRequestResponse;
import io.javalin.http.ConflictResponse;
import io.javalin.http.InternalServerErrorResponse;
import io.javalin.http.NotFoundResponse;
import za.dots.common.SharedFunctions;
import za.dots.controllers.interfaces.RoomApi;
import za.dots.db.GameDao;
import za.dots.db.RoomDao;
import za.dots.models.*;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class RoomCrudHandler implements RoomApi {
    private final RoomDao roomDao = new RoomDao();

    private final GameDao gameDao = new GameDao();

    private final SharedFunctions sharedFunctions = new SharedFunctions();

    @Override
    public Room createRoom(String creatorUsername, String roomName) {
        try {
            // assuming the creator exists in identity server
            Player creator = new Player(creatorUsername);

            // check if username is in an active game room (status will be OPEN)
            boolean isCreatorInRoom = this.roomDao.isCreatorInActiveRoom(creatorUsername);
            if (isCreatorInRoom) {
                throw new ConflictResponse("Player is already in an active game.");
            }

            // check if roomName exists in an active game room
            boolean isRoomNameExists = this.roomDao.isRoomNameExists(roomName);
            if (isRoomNameExists) {
                throw new ConflictResponse("Room name already exists.");
            }

            Room room = this.roomDao.createRoom(roomName, creatorUsername); // create Room, create PlayerRoom (with creator = 1)
            if (room != null) {
                Game game = this.gameDao.createGame(room.getRoomId(), creatorUsername); // insert into Game table
                if (game == null)
                    throw new InternalServerErrorResponse("The room could not be created.");

                // add dots, lines, boxes
                List<Dot> dots = new ArrayList<>();
                List<Line> lines = new ArrayList<>();
                List<Box> boxes = new ArrayList<>();
                for (int i = 0; i < Tn(game.getGridSize()); i++) {
                    for (int j = 0; j < Tn(game.getGridSize()); j++) {
                        // set coordiante
                        CoOrdinate coordinate = new CoOrdinate(j, i);

                        if (i % 2 == 0) { // even: dot, line, dot
                            if (j % 2 == 0) {
                                Dot dot = new Dot(coordinate);
                                dots.add(dot);
                            } else {
                                Line line = new Line(coordinate);
                                lines.add(line);
                            }
                        } else { // odd: line, box, line
                            if (j % 2 == 0) {
                                Line line = new Line(coordinate);
                                lines.add(line);
                            } else {
                                Box box = new Box(coordinate);
                                boxes.add(box);
                            }
                        }
                    }
                }

                boolean isDotsAdded = this.gameDao.addDots(room.getRoomId(), dots); // insert into Dot table
                if (!isDotsAdded)
                    throw new InternalServerErrorResponse("The room could not be created.");

                // add dots to lines
                for (int i = 0; i < lines.size(); i++) {
                    int x = lines.get(i).getCoordinate().getX();
                    int y = lines.get(i).getCoordinate().getY();
                    if (y % 2 == 0) { // even (horizontal line)
                        // left Dot
                        CoOrdinate coordinateLeft = new CoOrdinate(x - 1, y);
                        Dot leftDot = this.sharedFunctions.findDotBasedOnCoordinate(dots, coordinateLeft);
                        lines.get(i).setDot1(leftDot);

                        // right Dot
                        CoOrdinate coordinateRight = new CoOrdinate(x + 1, y);
                        Dot rightDot = this.sharedFunctions.findDotBasedOnCoordinate(dots, coordinateRight);
                        lines.get(i).setDot2(rightDot);
                    } else { // odd (vertical line)
                        // above Dot
                        CoOrdinate coordinateAbove = new CoOrdinate(x, y - 1);
                        Dot aboveDot = this.sharedFunctions.findDotBasedOnCoordinate(dots, coordinateAbove);
                        lines.get(i).setDot1(aboveDot);

                        // below Dot
                        CoOrdinate coordinateBelow = new CoOrdinate(x, y + 1);
                        Dot belowDot = this.sharedFunctions.findDotBasedOnCoordinate(dots, coordinateBelow);
                        lines.get(i).setDot2(belowDot);
                    }
                }

                boolean isLinesAdded = this.gameDao.addLines(room.getRoomId(), lines); // insert into Line table
                if (!isLinesAdded)
                    throw new InternalServerErrorResponse("The room could not be created.");

                // add lines to boxes
                for (int i = 0; i < boxes.size(); i++) {
                    int x = boxes.get(i).getCoordinate().getX();
                    int y = boxes.get(i).getCoordinate().getY();

                    // left line
                    CoOrdinate coordinateLeft = new CoOrdinate(x - 1, y);
                    Line leftLine = this.sharedFunctions.findLineBasedOnCoordinate(lines, coordinateLeft);

                    // right line
                    CoOrdinate coordinateRight = new CoOrdinate(x + 1, y);
                    Line rightLine = this.sharedFunctions.findLineBasedOnCoordinate(lines, coordinateRight);

                    // above line
                    CoOrdinate coordinateAbove = new CoOrdinate(x, y - 1);
                    Line aboveLine = this.sharedFunctions.findLineBasedOnCoordinate(lines, coordinateAbove);

                    // below line
                    CoOrdinate coordinateBelow = new CoOrdinate(x, y + 1);
                    Line belowLine = this.sharedFunctions.findLineBasedOnCoordinate(lines, coordinateBelow);

                    // add lines
                    boxes.get(i).setLine1(leftLine);
                    boxes.get(i).setLine2(rightLine);
                    boxes.get(i).setLine3(aboveLine);
                    boxes.get(i).setLine4(belowLine);
                }

                boolean isBoxAdded = this.gameDao.addBoxes(room.getRoomId(), boxes); // insert into Box table
                if (!isBoxAdded)
                    throw new InternalServerErrorResponse("The room could not be created.");

                // add scores
                boolean isScoreAdded = this.gameDao.addScores(room.getRoomId(), creatorUsername); // insert into Score table
                if (!isScoreAdded)
                    throw new InternalServerErrorResponse("The room could not be created.");

                game.setDots(dots);
                game.setLines(lines);
                game.setBoxes(boxes);

                game.addScoresItem(new Score(creator));

                // set winner to null
                game.setWinner(null);

                room.setGame(game);

                return room;
            }

            throw new BadRequestResponse("The room could not be created.");
        }
        catch (SQLException e) {
            throw new InternalServerErrorResponse("The database could not be connected.");
        }
    }

    @Override
    public Room deleteRoomById(String roomId, String username) {
        try {
            // assuming the username exists in the identity server
            Room room = this.roomDao.getRoomById(roomId); // GET room from database WHERE roomid = roomId

            if (room == null) {
                throw new BadRequestResponse("Room does not exist.");
            }

            if (!room.getCreator().getUsername().equals(username))
                throw new BadRequestResponse("Only the creator can delete the game room.");

            // delete Room from database, also delete PlayerRoom, Dot, Line, Game, Score, Box
            boolean isDeleted = this.roomDao.deleteGame(roomId);

            if (isDeleted)
                return room;

            throw new InternalServerErrorResponse("The room could not be deleted.");
        }
        catch (SQLException e) {
            throw new InternalServerErrorResponse("The database could not be connected.");
        }
    }

    @Override
    public Room getRoomById(String roomId) {
        try {
            Room room = this.roomDao.getRoomById(roomId); // GET room from database where roomid = roomId
            if (room != null)
                return room;
            throw new NotFoundResponse("Room could not be found.");
        }
        catch (SQLException e) {
            throw new InternalServerErrorResponse("The database could not be connected.");
        }
    }

    @Override
    public List<Room> getRooms() {
        try {
            List<Room> rooms = roomDao.getRooms(); // fetch rooms from database

            if (rooms == null) {
                throw new NotFoundResponse("No rooms found.");
            }
            return rooms;
        }
        catch (SQLException e) {
            throw new InternalServerErrorResponse("The database could not be connected.");
        }
    }

    @Override
    public Room joinRoom(String roomId, String username) {
        try {
            // assuming the player already exists
            Player player = new Player(username);

            // check if username is in an active game room (status will be OPEN)
            boolean isPlayerInRoom = this.roomDao.isCreatorInActiveRoom(username);

            if (isPlayerInRoom) {
                throw new ConflictResponse("The player is already in an active game.");
            }

            Room room = this.roomDao.getRoomById(roomId); // get Room based on roomID

            if (room == null) {
                throw new NotFoundResponse("The room could not be found.");
            }

            if (room.getStatus().equals(Room.StatusEnum.STARTED))
                throw new BadRequestResponse("The game has already started.");
            if (room.getStatus().equals(Room.StatusEnum.CLOSED))
                throw new BadRequestResponse("The game room does not exist anymore.");

            if (room.getPlayers().size() >= 6) {
                throw new BadRequestResponse("The game room has reached the maximum number of players");
            }

            boolean isPlayerInGame = this.roomDao.joinRoom(roomId, username); // join player to game (insert record into PlayerRoom table)
            boolean isPlayerScoredAdded = this.gameDao.addScores(roomId, username); // update the scores also

            if (isPlayerInGame && isPlayerScoredAdded) {
                room.addPlayersItem(player);
                room.getGame().addScoresItem(new Score(player));

                return room;
            }

            throw new InternalServerErrorResponse("The player could not join the room.");
        }
        catch (SQLException e) {
            throw new InternalServerErrorResponse("The database could not be connected.");
        }
    }

    @Override
    public Room leaveRoom(String roomId, String username) {
        try {
            // assuming the player is valid and logged in
            Room room = this.roomDao.getRoomById(roomId); // get Room based on roomID

            if (room == null) {
                throw new NotFoundResponse("The room could not be found.");
            }

            if (room.getCreator().getUsername().equals(username))
                throw new BadRequestResponse("The creator cannot leave the room.");
            if (room.getStatus().equals(Room.StatusEnum.STARTED))
                throw new BadRequestResponse("You cannot leave a game which has already started.");
            if (room.getStatus().equals(Room.StatusEnum.CLOSED))
                throw new BadRequestResponse("You cannot leave a game which has ended.");

            Player player = isPlayerInRoom(room.getPlayers(), username);
            if (player == null) {
                throw new NotFoundResponse("The player is not in this room.");
            }

            boolean isPlayerDeleted = this.roomDao.deletePlayer(roomId, username);  // DELETE player from PlayerRoom
            boolean isScoreDeleted = this.gameDao.deletePlayerScore(roomId, username);  // DELETE score from Score

            if (isPlayerDeleted && isScoreDeleted) {
                room.getPlayers().remove(player);

                for (Score score : room.getGame().getScores()) {
                    if (score.getPlayer().getUsername().equals(username)) {
                        room.getGame().getScores().remove(score);
                        break;
                    }
                }

                return room;
            }

            throw new InternalServerErrorResponse("The player could not leave the room.");
        }
        catch (SQLException e) {
            throw new InternalServerErrorResponse("The database could not be connected.");
        }
    }

    @Override
    public String sendGameState(String roomId, String username, CoOrdinate coordinate) {
        try {
            // assuming the player is valid and logged in

            Room room = this.roomDao.getRoomById(roomId); // get Room based on roomID

            if (room == null) {
                throw new NotFoundResponse("The room could not be found.");
            }

            if (!room.getStatus().equals(Room.StatusEnum.STARTED))
                throw new BadRequestResponse("The game has not started.");
            if (room.getStatus().equals(Room.StatusEnum.CLOSED))
                throw new BadRequestResponse("The room does not exist anymore.");

            Player player = isPlayerInRoom(room.getPlayers(), username);
            if (player == null) {
                throw new NotFoundResponse("The player is not in this room.");
            }

            if (!room.getGame().getCurrentPlayer().getUsername().equals(username)) {
                throw new BadRequestResponse("It is not your turn!");
            }

            Line selectedLine = this.sharedFunctions.findLineBasedOnCoordinate(room.getGame().getLines(), coordinate);

            if (selectedLine == null)
                throw new BadRequestResponse("Invalid line played.");

            // update line status and username in Line
            boolean updatedLine = this.gameDao.updateLine(roomId, username, coordinate.getX(), coordinate.getY());

            if (!updatedLine)
                throw new InternalServerErrorResponse("The move could not be played.");

            // set selected line as occupied
            selectedLine.setStatus(Line.StatusEnum.OCCUPIED);
            selectedLine.setPlayer(player);

            // check if box is completed
            List<Box> completedBox = checkIfBoxCompleted(room.getGame().getBoxes(), selectedLine);
            if (completedBox.size() > 0) {
                // set box as completed
                for (Box box : completedBox) {
                    int x = box.getCoordinate().getX();
                    int y = box.getCoordinate().getY();
                    boolean updateBox = this.gameDao.updateBoxCompleted(roomId, username, x, y); // update box on Box table
                    if (!updateBox)
                        throw new InternalServerErrorResponse("The move could not be played.");

                    box.setStatus(Box.StatusEnum.OCCUPIED);
                    box.setPlayer(player);
                }

                // update player score
                Score playerScore = findScoreOfPlayer(room.getGame().getScores(), room.getGame().getCurrentPlayer());
                int newScore = playerScore.getScore() + completedBox.size();
                boolean updatedScore = this.gameDao.updatePlayerScore(roomId, username, newScore); //  update player score
                if (!updatedScore)
                    throw new InternalServerErrorResponse("The move could not be played.");
                playerScore.setScore(newScore);

                // check if all boxes completed
                boolean allBoxesCompleted = checkAllBoxesCompleted(room.getGame().getBoxes());

                // game over
                if (allBoxesCompleted) {
                    // get winner
                    Player playerWinner = null;
                    List<Score> scores = room.getGame().getScores();
                    int maxScore = scores.get(0).getScore();
                    for (int i = 0; i < scores.size(); i++) {
                        if (scores.get(i).getScore() > maxScore) {
                            maxScore = scores.get(i).getScore();
                            playerWinner = scores.get(i).getPlayer();
                        }
                    }

                    // set winner
                    boolean updatedWinner = false;
                    if (playerWinner != null) {
                        // update winner to playerWinner.getName and status to DONE
                        updatedWinner = this.gameDao.updateWinner(roomId, playerWinner.getUsername(), Game.StatusEnum.DONE);

                        if (!updatedWinner)
                            throw new InternalServerErrorResponse("The move could not be played.");

                        room.getGame().setStatus(Game.StatusEnum.DONE);
                        room.getGame().setWinner(playerWinner);
                    } else {
                        // update winner to "" and status to DRAW
                        updatedWinner = this.gameDao.updateWinner(roomId, "", Game.StatusEnum.DRAW);

                        if (!updatedWinner)
                            throw new InternalServerErrorResponse("The move could not be played.");

                        room.getGame().setStatus(Game.StatusEnum.DRAW);
                    }

                    // update game room to closed
                    boolean updateRoomStatus = this.roomDao.updateRoomStatus(roomId, Room.StatusEnum.CLOSED); // update room status to CLOSED
                    if (!updateRoomStatus)
                        throw new InternalServerErrorResponse("The move could not be played.");

                    room.setStatus(Room.StatusEnum.CLOSED);
                }
            }

            // switch player turn
            else {
                int currentPlayerIndex = room.getPlayers().indexOf(player);  // check if this works correctly

                // get next player index
                int nextPlayerIndex = currentPlayerIndex + 1;
                if (nextPlayerIndex >= room.getPlayers().size())
                    nextPlayerIndex = 0;

                // set currentPlayer to next player
                // update the currentplayer to nextPlayer.name
                boolean updatedCurrentPlayer = this.gameDao.updateCurrentPlayer(roomId, room.getPlayers().get(nextPlayerIndex).getUsername());
                if (!updatedCurrentPlayer)
                    throw new InternalServerErrorResponse("The move could not be played.");

                room.getGame().setCurrentPlayer(room.getPlayers().get(nextPlayerIndex));
            }

            return "Line selected.";
        }
        catch (SQLException e) {
            throw new InternalServerErrorResponse("The database could not be connected.");
        }
    }

    @Override
    public Room startRoom(String roomId, String username) {
        try {
            // assuming the player is valid and logged in

            Room room = this.roomDao.getRoomById(roomId); // get Room based on roomID

            if (room == null) {
                throw new NotFoundResponse("The room could not be found.");
            }

            if (!room.getCreator().getUsername().equals(username))
                throw new BadRequestResponse("The creator has to start the room.");
            if (room.getStatus().equals(Room.StatusEnum.STARTED))
                throw new BadRequestResponse("You cannot start a game which has already started.");
            if (room.getStatus().equals(Room.StatusEnum.CLOSED))
                throw new BadRequestResponse("You cannot start a game which has already closed.");

            Player player = isPlayerInRoom(room.getPlayers(), username);
            if (player == null) {
                throw new NotFoundResponse("The player is not in this room.");
            }

            boolean isPlayerCreator = room.getCreator().getUsername().equals(username);
            if (!isPlayerCreator) {
                throw new BadRequestResponse("The game can only be started by the creator.");
            }

            if (room.getPlayers().size() < 2) {
                throw new BadRequestResponse("The game needs to have atleast 2 players to start the game.");
            }

            // update status of Game to PLAYING and Room to STARTED
            boolean isGameStatusUpdated = this.roomDao.updateGameStatus(roomId, Room.StatusEnum.STARTED, Game.StatusEnum.PLAYING);

            if (isGameStatusUpdated) {
                room.getGame().setStatus(Game.StatusEnum.PLAYING);
                room.setStatus(Room.StatusEnum.STARTED);

                return room;
            }

            throw new InternalServerErrorResponse("The room could not be started.");
        }
        catch (SQLException e) {
            throw new InternalServerErrorResponse("The database could not be connected.");
        }
    }

    private List<Box> checkIfBoxCompleted(List<Box> boxes, Line line) {
        return boxes.stream()
                .filter(box -> isLineInBox(box, line))
                .filter(this::isBoxCompleted)
                .collect(Collectors.toList());
    }

    private boolean isLineInBox(Box box, Line line) {
        return box.getLine1().equals(line) || box.getLine2().equals(line) ||
                box.getLine3().equals(line) || box.getLine4().equals(line);
    }

    private boolean isBoxCompleted(Box box) {
        return box.getLine1().getStatus() == Line.StatusEnum.OCCUPIED &&
                box.getLine2().getStatus() == Line.StatusEnum.OCCUPIED &&
                box.getLine3().getStatus() == Line.StatusEnum.OCCUPIED &&
                box.getLine4().getStatus() == Line.StatusEnum.OCCUPIED;
    }

    private Score findScoreOfPlayer(List<Score> scores, Player player) {
        for (Score score : scores) {
            if (score.getPlayer().getUsername().equals(player.getUsername())) {
                return score;
            }
        }
        return null;
    }

    private boolean checkAllBoxesCompleted(List<Box> boxes) {
        for (Box box : boxes) {
            if (box.getStatus().equals(Box.StatusEnum.EMPTY)) {
                return false;
            }
        }
        return true;
    }

    private Player isPlayerInRoom(List<Player> players, String username) {
        for (Player player : players) {
            if (player.getUsername().equals(username)) {
                return player;
            }
        }
        return null;
    }

    private int Tn(int n) {
        return (2 * n) - 1;
    }
}
