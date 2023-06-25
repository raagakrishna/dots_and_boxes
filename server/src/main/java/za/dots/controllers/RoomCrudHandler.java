package za.dots.controllers;

import io.javalin.http.BadRequestResponse;
import io.javalin.http.ConflictResponse;
import io.javalin.http.InternalServerErrorResponse;
import io.javalin.http.NotFoundResponse;
import za.dots.controllers.interfaces.RoomApi;
import za.dots.models.*;

import java.util.List;
import java.util.stream.Collectors;

public class RoomCrudHandler implements RoomApi {
    @Override
    public Room createRoom(String creatorUsername, String roomName) {
        // assuming the creator exists in identity server
        Player creator = new Player(creatorUsername);

        // TODO: check if username is in an active game room (status will be OPEN)
        boolean isCreatorInRoom = false;
        if (isCreatorInRoom) {
            throw new ConflictResponse("Player is already in an active game.");
        }

        // TODO: check if roomName exists in an active game room
        boolean isRoomNameExists = false;
        if (isRoomNameExists) {
            throw new ConflictResponse("Room name already exists.");
        }

        Room room = null; // TODO: create Room, create ClientRoom (with creator = 1)
        if (room != null) {
            room.setCreator(creator);
            room.addPlayersItem(creator);

            boolean isGameAdded = true; // TODO: insert into Game table, and set room status to STARTED
            boolean isDotsAdded = true; // TODO: insert into Dot table
            boolean isLinesAdded = true; // TODO: insert into Line table
            boolean isBoxAdded = true; // TODO: insert into Box table
            boolean isScoreAdded = true; // TODO: insert into Score table

            if (isGameAdded && isDotsAdded && isDotsAdded && isLinesAdded && isBoxAdded && isScoreAdded) {
                // create game
                Game game = new Game();

                // add dots, line, and boxes
                int totalSize = Tn(game.getGridSize());
                for (int i = 0 ; i < totalSize ; i++) {
                    for (int j = 0 ; j < totalSize ; j++) {
                        // set coordiante
                        CoOrdinate coordinate = new CoOrdinate(j, i);

                        if (i % 2 == 0) { // even: dot, line, dot
                            if (j % 2 == 0) {
                                Dot dot = new Dot(coordinate);
                                game.addDotsItem(dot);
                            }
                            else {
                                Line line = new Line(coordinate);
                                game.addLinesItem(line);
                            }
                        }
                        else { // odd: line, box, line
                            if (j % 2 == 0) {
                                Line line = new Line(coordinate);
                                game.addLinesItem(line);
                            }
                            else {
                                Box box = new Box(coordinate);
                                game.addBoxesItem(box);
                            }
                        }
                    }
                }

                // add dots to lines
                for (Line line : game.getLines()) {
                    int x = line.getCoordinate().getX();
                    int y = line.getCoordinate().getY();
                    if (y % 2 == 0) { // even (horizontal line)
                        // left Dot
                        CoOrdinate coordinateLeft = new CoOrdinate(x - 1, y);
                        Dot leftDot = findDotBasedOnCoordinate(game.getDots(), coordinateLeft);
                        line.setDot1(leftDot);

                        // right Dot
                        CoOrdinate coordinateRight = new CoOrdinate(x + 1, y);
                        Dot rightDot = findDotBasedOnCoordinate(game.getDots(), coordinateRight);
                        line.setDot2(rightDot);
                    }
                    else { // odd (vertical line)
                        // above Dot
                        CoOrdinate coordinateAbove = new CoOrdinate(x, y - 1);
                        Dot aboveDot = findDotBasedOnCoordinate(game.getDots(), coordinateAbove);
                        line.setDot1(aboveDot);

                        // below Dot
                        CoOrdinate coordinateBelow = new CoOrdinate(x, y + 1);
                        Dot belowDot = findDotBasedOnCoordinate(game.getDots(), coordinateBelow);
                        line.setDot2(belowDot);
                    }

                }

                // add lines to boxes
                for (Box box : game.getBoxes()) {
                    int x = box.getCoordinate().getX();
                    int y = box.getCoordinate().getY();

                    // left line
                    CoOrdinate coordinateLeft = new CoOrdinate(x - 1, y);
                    Line leftLine = findLineBasedOnCoordinate(game.getLines(), coordinateLeft);

                    // right line
                    CoOrdinate coordinateRight = new CoOrdinate(x + 1, y);
                    Line rightLine = findLineBasedOnCoordinate(game.getLines(), coordinateRight);

                    // above line
                    CoOrdinate coordinateAbove = new CoOrdinate(x, y - 1);
                    Line aboveLine = findLineBasedOnCoordinate(game.getLines(), coordinateAbove);

                    // below line
                    CoOrdinate coordinateBelow = new CoOrdinate(x, y + 1);
                    Line belowLine = findLineBasedOnCoordinate(game.getLines(), coordinateBelow);

                    // add lines
                    box.setLine1(leftLine);
                    box.setLine2(rightLine);
                    box.setLine3(aboveLine);
                    box.setLine4(belowLine);
                }

                // add score for players
                for (int i = 0 ; i < room.getPlayers().size() ; i++){
                    Score clientScore = new Score(room.getPlayers().get(i));
                    game.addScoresItem(clientScore);
                }

                // set winner to null
                game.setWinner(null);

                room.setGame(game);

                return room;
            }
            throw new InternalServerErrorResponse("The room could not be created.");
        }

        throw new BadRequestResponse("The room could not be created.");
    }

    @Override
    public Room deleteRoomById(String roomId, String username) {
        // assuming the username exists in the identity server

        Room room = null; // TODO: GET room from database WHERE roomid = roomId

        if (room == null) {
            throw new BadRequestResponse("Room does not exist.");
        }

        // TODO: delete Room from database, also delete PlayerRoom, Dot, Line, Game, Score, Box
        boolean isDeleted = false;

        if (isDeleted)
            return room;

        throw new InternalServerErrorResponse("The room could not be deleted.");
    }

    @Override
    public Room getRoomById(String roomId) {
        Room room = null; // TODO: GET room from database where roomid = roomId
        if (room != null)
            return room;
        throw new NotFoundResponse("Room could not be found.");
    }

    @Override
    public List<Room> getRooms() {
        List<Room> rooms = null; // TODO: fetch rooms from database

        if (rooms == null) {
            throw new NotFoundResponse("No rooms found.");
        }
        return rooms;
    }

    @Override
    public Room joinRoom(String roomId, String username) {
        // assuming the player already exists
        Player player = new Player(username);

        boolean isPlayerInRoom = false; // TODO: check if Player is in an active game

        if (isPlayerInRoom) {
            throw new ConflictResponse("The player is already in an active game.");
        }

        Room room = null; // TODO: get Room based on roomID

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

        boolean isPlayerInGame = false; // TODO: join player to game (insert record into PlayerRoom table)

        if (isPlayerInGame) {
            room.addPlayersItem(player);

            return room;
        }

        throw new InternalServerErrorResponse("The player could not join the room.");
    }

    @Override
    public Room leaveRoom(String roomId, String username) {
        // assuming the player is valid and logged in
        Player player = new Player(username);

        Room room = null; // TODO: get Room based on roomID

        if (room == null) {
            throw new NotFoundResponse("The room could not be found.");
        }

        if (room.getCreator().getUsername().equals(username))
            throw new BadRequestResponse("The creator cannot leave the room.");
        if (room.getStatus().equals(Room.StatusEnum.STARTED))
            throw new BadRequestResponse("You cannot leave a game which has already started.");
        if (room.getStatus().equals(Room.StatusEnum.CLOSED))
            throw new BadRequestResponse("You cannot leave a game which has ended.");

        boolean isPlayerInRoom = room.getPlayers().contains(player);

        if (!isPlayerInRoom) {
            throw new NotFoundResponse("The player is not in this room.");
        }

        boolean isDeleted = false;  // TODO: DELETE client from ClientRoom

        if (!isDeleted)
            throw new InternalServerErrorResponse("The player could not leave the room.");

        room.getPlayers().remove(player);

        return room;
    }

    @Override
    public String sendGameState(String roomId, String username, PlayerLine playerLine) {
        // assuming the player is valid and logged in
        Player player = new Player(username);

        Room room = null; // TODO: get Room based on roomID

        if (room == null) {
            throw new NotFoundResponse("The room could not be found.");
        }

        if (!room.getStatus().equals(Room.StatusEnum.STARTED))
            throw new BadRequestResponse("The game has not started.");
        if (room.getStatus().equals(Room.StatusEnum.CLOSED))
            throw new BadRequestResponse("The room does not exist anymore.");

        boolean isPlayerInRoom = room.getPlayers().contains(player);

        if (!isPlayerInRoom) {
            throw new NotFoundResponse("The player is not in this room.");
        }

        CoOrdinate lineCoordinate = new CoOrdinate(playerLine.getLineX(), playerLine.getLineY());
        Line selectedLine = findLineBasedOnCoordinate(room.getGame().getLines(), lineCoordinate);

        if (selectedLine == null)
            throw new BadRequestResponse("Invalid line played.");

        // TODO: update line status and client in Line
        boolean updatedLine = false;

        if (!updatedLine)
            throw new InternalServerErrorResponse("The move could not be played.");

        // set selected line as occupied
        selectedLine.setStatus(Line.StatusEnum.OCCUPIED);
        selectedLine.setPlayer(player);

        // check if box is completed
        List<Box> completedBox = checkIfBoxCompleted(room.getGame().getBoxes(), selectedLine);
        if (completedBox.size() > 0) {
            // set box as completed
            for (int i = 0; i < completedBox.size() ; i++) {
                boolean updateBox = false; // TODO: update box on Box table
                if (!updateBox)
                    throw new InternalServerErrorResponse("The move could not be played.");

                completedBox.get(i).setStatus(Box.StatusEnum.OCCUPIED);
                completedBox.get(i).setPlayer(player);
            }

            // update player score
            Score playerScore = findScoreOfPlayer(room.getGame().getScores(), room.getGame().getCurrentPlayer());
            Integer newScore = playerScore.getScore() + completedBox.size();
            boolean updatedScore = false; // TODO: update player score
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
                for (int i = 0 ; i < scores.size() ; i++) {
                    if (scores.get(i).getScore() > maxScore) {
                        maxScore = scores.get(i).getScore();
                        playerWinner = scores.get(i).getPlayer();
                    }
                }

                // set winner
                boolean updatedWinner = false;
                if (playerWinner != null) {
                    updatedWinner = false;  // TODO: update winner to playerWinner.getName and status to DONE

                    if (!updatedWinner)
                        throw new InternalServerErrorResponse("The move could not be played.");

                    room.getGame().setStatus(Game.StatusEnum.DONE);
                    room.getGame().setWinner(playerWinner);
                }
                else {
                    updatedWinner = false; // TODO: update winner to "" and status to DRAW

                    if (!updatedWinner)
                        throw new InternalServerErrorResponse("The move could not be played.");

                    room.getGame().setStatus(Game.StatusEnum.DRAW);
                }

                // update game room to closed
                boolean updateRoomStatus = false; // TODO: update room status to CLOSED
                if (!updateRoomStatus)
                    throw new InternalServerErrorResponse("The move could not be played.");

                room.setStatus(Room.StatusEnum.CLOSED);
            }
        }

        // switch player turn
        else {
            int currentPlayerIndex = room.getPlayers().indexOf(player);  // TODO: check if this works correctly

            // get next player index
            int nextPlayerIndex = currentPlayerIndex + 1;
            if (nextPlayerIndex >= room.getPlayers().size())
                nextPlayerIndex = 0;

            // set currentPlayer to next player
            boolean updatedCurrentPlayer = false; // TODO: update the currentplayer to nextPlayer.name
            if (!updatedCurrentPlayer)
                throw new InternalServerErrorResponse("The move could not be played.");
            room.getGame().setCurrentPlayer(room.getPlayers().get(nextPlayerIndex));
        }

        return "Line selected.";
    }

    @Override
    public Room startRoom(String roomId, String username, Integer gridSize) {
        // assuming the player is valid and logged in
        Player player = new Player(username);

        Room room = null; // TODO: get Room based on roomID

        if (room == null) {
            throw new NotFoundResponse("The room could not be found.");
        }

        if (!room.getCreator().getUsername().equals(username))
            throw new BadRequestResponse("The creator has to start the room.");
        if (room.getStatus().equals(Room.StatusEnum.STARTED))
            throw new BadRequestResponse("You cannot start a game which has already started.");
        if (room.getStatus().equals(Room.StatusEnum.CLOSED))
            throw new BadRequestResponse("You cannot start a game which has already closed.");

        boolean isPlayerInRoom = true; // room.getPlayers().contains(player);
        if (!isPlayerInRoom) {
            throw new NotFoundResponse("The player is not in this room.");
        }

        boolean isPlayerCreator = true; // room.getCreator().getUsername().equals(username);
        if (!isPlayerCreator) {
            throw new BadRequestResponse("The game can only be started by the creator.");
        }

        if (room.getPlayers().size() < 2) {
            throw new BadRequestResponse("The game needs to have atleast 2 players to start the game.");
        }

        // set status to playing
        boolean isGameStatusUpdated = false;  // TODO: update status of Game to PLAYING

        if (isGameStatusUpdated) {
            room.getGame().setStatus(Game.StatusEnum.PLAYING);

            return room;
        }

        throw new InternalServerErrorResponse("The room could not be started.");
    }

    private Line findLineBasedOnCoordinate(List<Line> lines, CoOrdinate coordinate) {
        for (Line line : lines) {
            if (line.getCoordinate().getX() == coordinate.getX() && line.getCoordinate().getY() == coordinate.getY()) {
                return line;
            }
        }
        return null;
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

    private Score findScoreOfPlayer(List<Score> scores, Player client) {
        for (Score score : scores) {
            if (score.getPlayer().getUsername().equals(client.getUsername())) {
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

    private int Tn(int n) {
        return (2 * n) - 1;
    }

    public Dot findDotBasedOnCoordinate(List<Dot> dots, CoOrdinate coordinate) {
        for (Dot dot : dots) {
            if (dot.getCoordinate().getX() == coordinate.getX() && dot.getCoordinate().getY() == coordinate.getY())
                return dot;
        }
        return null;
    }
}
