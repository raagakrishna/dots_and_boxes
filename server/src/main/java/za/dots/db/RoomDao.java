package za.dots.db;

import za.dots.common.SharedFunctions;
import za.dots.models.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class RoomDao {

    private final GameDao gameDao = new GameDao();

    private final SharedFunctions sharedFunctions = new SharedFunctions();

    public List<Room> getRooms() throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            // get RoomId
            List<String> roomIds = new ArrayList<>();
            String query = "SELECT R.roomid FROM Room as R";

            try (ResultSet resultSet = datasourceConnection.executeStatement(query)){
                while (resultSet.next()) {
                    roomIds.add(resultSet.getString("roomid"));
                }
            }

            System.out.println(roomIds);
            List<Room> rooms = new ArrayList<>();
            roomIds.forEach(roomId -> {
                try {
                    rooms.add(getRoomById(roomId));
                } catch (SQLException e) {
                    throw new RuntimeException(e);
                }
            });

            datasourceConnection.closeConnection();

            return rooms;
        } catch (Exception e) {
            throw e;
        }
    }

    public Room getRoomById(String roomId) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            Room room = new Room();
            Game game = new Game();

            String query = "SELECT R.roomid,R.roomname,R.status AS 'roomStatus',PR.username,PR.creator," +
                    "G.gridSize,G.status AS 'gameStatus',G.currentPlayer,G.winner " +
                    "FROM Room AS R JOIN PlayerRoom AS PR ON R.roomid = PR.roomid JOIN Game AS G ON R.roomid = G.roomid " +
                    "WHERE R.roomid = '" + roomId + "'";
            try (ResultSet resultSet = datasourceConnection.executeStatement(query)) {
                while (resultSet.next()) {
                    room.setRoomId(resultSet.getString("roomid"));
                    room.setStatus(Room.StatusEnum.fromValue(resultSet.getString("roomStatus")));
                    room.setRoomName(resultSet.getString("roomname"));

                    // add creator
                    String username = resultSet.getString("username");
                    Player creator = new Player(username);
                    room.addPlayersItem(creator);

                    boolean isCreator = resultSet.getBoolean("creator");

                    if (isCreator)
                        room.setCreator(creator);

                    game.setGridSize(resultSet.getInt("gridSize"));
                    game.setStatus(Game.StatusEnum.fromValue(resultSet.getString("gameStatus")));

                    // add current player
                    game.setCurrentPlayer(new Player(resultSet.getString("currentPlayer")));

                    if (resultSet.getString("winner") != null) {
                        game.setWinner(new Player(resultSet.getString("winner")));
                    }
                    room.setGame(game);
                }
            }

            if (room.getRoomId() == null)
                return null;

            // adding dots
            game.setDots(new ArrayList<>());
            String queryDots = "SELECT R.roomid,D.x,D.y " +
                    "FROM Room AS R JOIN Dot AS D " +
                    "ON R.roomid = D.roomid WHERE R.roomid = '" + roomId + "'";
            try (ResultSet resultSet = datasourceConnection.executeStatement(queryDots)) {
                while (resultSet.next()) {
                    CoOrdinate coordinate = new CoOrdinate(resultSet.getInt("x"), resultSet.getInt("y"));
                    game.addDotsItem(new Dot(coordinate));
                }
            }

            // adding lines
            game.setLines(new ArrayList<>());
            String queryLines = "SELECT L.x,L.y,L.dot1_id,L.dot2_id,L.status,L.username " +
                    "FROM Room AS R JOIN Line AS L " +
                    "ON R.roomid = L.roomid WHERE R.roomid = '" + roomId + "'";
            try (ResultSet resultSet = datasourceConnection.executeStatement(queryLines)) {
                while (resultSet.next()) {
                    CoOrdinate coordinate = new CoOrdinate(resultSet.getInt("x"), resultSet.getInt("y"));

                    Line line = new Line(coordinate);
                    line.setStatus(Line.StatusEnum.fromValue(resultSet.getString("status")));

                    if (resultSet.getString("username") != null) {
                        line.setPlayer(new Player(resultSet.getString("username")));
                    }

                    // dot1
                    CoOrdinate coOrdinate_dot1 = this.gameDao.getCoordinateOfDot(resultSet.getInt("dot1_id"));
                    line.setDot1(this.sharedFunctions.findDotBasedOnCoordinate(game.getDots(), coOrdinate_dot1));

                    // dot2
                    CoOrdinate coOrdinate_dot2 = this.gameDao.getCoordinateOfDot(resultSet.getInt("dot2_id"));
                    line.setDot2(this.sharedFunctions.findDotBasedOnCoordinate(game.getDots(), coOrdinate_dot2));

                    game.addLinesItem(line);
                }
            }

            // adding boxes
            game.setBoxes(new ArrayList<>());
            String queryBoxes = "SELECT B.x,B.y,B.line1_id,B.line2_id,B.line3_id,B.line4_id,B.status,B.username " +
                    "FROM Room AS R JOIN Box AS B " +
                    "ON R.roomid = B.roomid WHERE R.roomid = '" + roomId + "'";
            try (ResultSet resultSet = datasourceConnection.executeStatement(queryBoxes)) {
                while (resultSet.next()) {
                    CoOrdinate coordinate = new CoOrdinate(resultSet.getInt("x"), resultSet.getInt("y"));

                    Box box = new Box(coordinate);
                    box.setStatus(Box.StatusEnum.fromValue(resultSet.getString("status")));

                    if (resultSet.getString("username") != null) {
                        box.setPlayer(new Player(resultSet.getString("username")));
                    }

                    // add line1
                    CoOrdinate coOrdinate_line1 = this.gameDao.getCoordinateOfLine(resultSet.getInt("line1_id"));
                    box.setLine1(this.sharedFunctions.findLineBasedOnCoordinate(game.getLines(), coOrdinate_line1));

                    // add line2
                    CoOrdinate coOrdinate_line2 = this.gameDao.getCoordinateOfLine(resultSet.getInt("line2_id"));
                    box.setLine2(this.sharedFunctions.findLineBasedOnCoordinate(game.getLines(), coOrdinate_line2));

                    // add line3
                    CoOrdinate coOrdinate_line3 = this.gameDao.getCoordinateOfLine(resultSet.getInt("line3_id"));
                    box.setLine3(this.sharedFunctions.findLineBasedOnCoordinate(game.getLines(), coOrdinate_line3));

                    // add line4
                    CoOrdinate coOrdinate_line4 = this.gameDao.getCoordinateOfLine(resultSet.getInt("line4_id"));
                    box.setLine4(this.sharedFunctions.findLineBasedOnCoordinate(game.getLines(), coOrdinate_line4));

                    game.addBoxesItem(box);
                }
            }

            // adding score
            game.setScores(new ArrayList<>());
            String queryScore = "SELECT S.username, S.score " +
                    "FROM Room AS R JOIN Score AS S " +
                    "ON R.roomid = S.roomid WHERE R.roomid = '" + roomId + "'";
            try (ResultSet resultSet = datasourceConnection.executeStatement(queryScore)) {
                while (resultSet.next()) {
                    Score score = new Score(new Player(resultSet.getString("username")));
                    score.setScore(resultSet.getInt("score"));
                    game.addScoresItem(score);
                }
            }

            /*
            else {
                String query = "SELECT R.roomid,R.roomname,R.status AS 'roomStatus',PR.username,PR.creator " +
                        "FROM Room AS R JOIN PlayerRoom AS PR ON R.roomid = PR.roomid " +
                        "WHERE R.roomid = '" + roomId + "'";
                try (ResultSet resultSet = datasourceConnection.executeStatement(query)) {
                    while (resultSet.next()) {
                        room.setRoomId(resultSet.getString("roomid"));
                        room.setStatus(Room.StatusEnum.fromValue(resultSet.getString("roomStatus")));
                        room.setRoomName(resultSet.getString("roomname"));

                        String username = resultSet.getString("username");
                        Player creator = new Player(username);
                        room.addPlayersItem(creator);

                        // add creator
                        boolean isCreator = resultSet.getBoolean("creator");
                        if (isCreator) {
                            room.setCreator(creator);
                        }

                        room.setGame(game);
                    }
                }
            }
            */
            datasourceConnection.closeConnection();

            return room;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean isCreatorInActiveRoom(String username) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            boolean isCreatorInActiveRoom = false;
            String queryRoomOpen = "SELECT [status] FROM [PlayerRoom] AS PR " +
                    "JOIN [Room] AS R ON PR.roomid = R.roomid " +
                    "WHERE [username] = '" + username + "'";
            try (ResultSet resultSet = datasourceConnection.executeStatement(queryRoomOpen)) {
                while (resultSet.next()) {
                    if (resultSet.getString("status").equals(Room.StatusEnum.OPEN.toString())) {
                        isCreatorInActiveRoom = true;
                    } else if (resultSet.getString("status").equals(Room.StatusEnum.STARTED.toString())) {
                        isCreatorInActiveRoom = true;
                    } else {
                        isCreatorInActiveRoom = false;
                    }
                }
            }

            datasourceConnection.closeConnection();

            return isCreatorInActiveRoom;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean isRoomNameExists(String roomName) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String queryRoom = "SELECT 1 FROM Room WHERE roomname = '" + roomName + "' " +
                    "AND (status = '" + Room.StatusEnum.OPEN + "' OR status = '" + Room.StatusEnum.STARTED + "')";
            ResultSet resultSet = datasourceConnection.executeStatement(queryRoom);
            return resultSet.next(); // Return true if no row is returned, indicating roomName is available
        }
        catch (Exception e) {
            throw e;
        }
    }

    public Room createRoom(String roomName, String creatorUsername) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            // get room id
            String roomId = generateRoomNumber();

            String query = "INSERT INTO [Room] (roomid,roomname,status) VALUES " +
                    "('" + roomId + "','" + roomName + "','" + Room.StatusEnum.OPEN.toString() + "')";
            if (datasourceConnection.executeUpdate(query) <= 0)
                return null;

            String query1 = "INSERT INTO [PlayerRoom] (roomid,username,creator) VALUES " +
                    "('" + roomId + "','" + creatorUsername + "',1)";
            if (datasourceConnection.executeUpdate(query1) <= 0)
                return null;

            Player creator = new Player(creatorUsername);

            Room room = new Room();
            room.setRoomId(roomId);
            room.setRoomName(roomName);
            room.setCreator(creator);
            room.setStatus(Room.StatusEnum.OPEN);
            room.addPlayersItem(creator);

            return room;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean joinRoom(String roomId, String username) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query1 = "INSERT INTO [PlayerRoom] (roomid,username,creator) VALUES " +
                    "('" + roomId + "','" + username + "',0)";
            if (datasourceConnection.executeUpdate(query1) <= 0)
                return false;

            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean deletePlayer(String roomId, String username) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query1 = "DELETE FROM [PlayerRoom] WHERE roomid = '" + roomId + "' AND username = '" + username + "'";
            if (datasourceConnection.executeUpdate(query1) <= 0)
                return false;

            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean updateGameStatus(String roomId, Room.StatusEnum roomStatus, Game.StatusEnum gameStatus) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query1 = "UPDATE [Room] SET status = '" + roomStatus + "' WHERE roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(query1) <= 0)
                return false;

            String query2 = "UPDATE [Game] SET status = '" + gameStatus + "' WHERE roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(query2) <= 0)
                return false;

            datasourceConnection.closeConnection();

            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean deleteGame(String roomId) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            // Delete records from Score table
            String deleteScoreQuery = "DELETE FROM [Score] WHERE roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(deleteScoreQuery) <= 0)
                return false;

            // Delete records from Dot table
            String deleteDotQuery = "DELETE FROM [Dot] WHERE roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(deleteDotQuery) <= 0)
                return false;

            // Delete records from Line table
            String deleteLineQuery = "DELETE FROM [Line] WHERE roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(deleteLineQuery) <= 0)
                return false;

            // Delete records from Box table
            String deleteBoxQuery = "DELETE FROM [Box] WHERE roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(deleteBoxQuery) <= 0)
                return false;

            // Delete records from Game table
            String deleteGameQuery = "DELETE FROM [Game] WHERE roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(deleteGameQuery) <= 0)
                return false;

            // Delete records from PlayerRoom table
            String deletePlayerRoomQuery = "DELETE FROM [PlayerRoom] WHERE roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(deletePlayerRoomQuery) <= 0)
                return false;

            // Delete records from Room table
            String deleteRoomQuery = "DELETE FROM [Room] WHERE roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(deleteRoomQuery) <= 0)
                return false;

            datasourceConnection.closeConnection();

            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean updateRoomStatus(String roomId, Room.StatusEnum roomStatus) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query1 = "UPDATE [Room] SET status = '" + roomStatus + "' WHERE roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(query1) <= 0)
                return false;

            datasourceConnection.closeConnection();

            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public String findRoomByUsername(String usernmae) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            // get RoomId
            String roomId = "";
            String query = "SELECT R.roomid, R.status FROM PlayerRoom as PR " +
                    "JOIN [Room] AS R ON PR.roomid = R.roomid " +
                    "WHERE username = '" + usernmae + "'";

            try (ResultSet resultSet = datasourceConnection.executeStatement(query)){
                while (resultSet.next()) {
                    String roomStatus = resultSet.getString("status");
                    if (!roomStatus.equals(Room.StatusEnum.CLOSED.toString()))
                        roomId = resultSet.getString("roomid");
                }
            }

            datasourceConnection.closeConnection();

            // no room found
            if (roomId.equals(""))
                return null;

            return roomId;
        } catch (Exception e) {
            throw e;
        }
    }

    public List<Room> findRoomsByUsername(String username) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            // get RoomId
            List<String> roomIds = new ArrayList<>();
            String query = "SELECT R.roomid, R.status FROM PlayerRoom as PR " +
                    "JOIN [Room] AS R ON PR.roomid = R.roomid " +
                    "WHERE username = '" + username + "'";

            try (ResultSet resultSet = datasourceConnection.executeStatement(query)){
                while (resultSet.next()) {
                    roomIds.add(resultSet.getString("roomid"));
                }
            }

            datasourceConnection.closeConnection();

            // no room found
            if (roomIds.size() == 0)
                return null;

            List<Room> rooms = new ArrayList<>();
            for (String roomId : roomIds) {
                rooms.add(getRoomById(roomId));
            }

            return rooms;
        } catch (Exception e) {
            throw e;
        }
    }

    private String generateRoomNumber() {
        // Generate a unique room number logic goes here
        return "ROOM" + System.currentTimeMillis();
    }
}
