package za.dots.db;

import za.dots.models.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class RoomDao {

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
                    rooms.add(getRoomsById(roomId));
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

    public Room getRoomsById(String roomId) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            boolean isRoomStarted = false;
            String queryRoomOpen = "SELECT R.status AS 'roomStatus' FROM Room AS R " +
                    "WHERE R.roomid = '" + roomId + "'";
            try (ResultSet resultSet = datasourceConnection.executeStatement(queryRoomOpen)) {
                while (resultSet.next()) {
                    if (resultSet.getString("roomStatus").equals(Room.StatusEnum.STARTED.toString())) {
                        isRoomStarted = true;
                    }
                }
            }

            System.out.println(isRoomStarted);

            Room room = new Room();
            Game game = new Game();

            if (isRoomStarted) {
                String query = "SELECT R.roomid,R.roomName,R.status AS 'roomStatus',CR.clientid,CR.creator," +
                        "G.gridSize,G.status AS 'gameStatus',G.currentPlayer,G.winner " +
                        "FROM Room AS R JOIN ClientRoom AS CR ON R.roomid = CR.roomid JOIN Game AS G ON R.roomid = G.roomid " +
                        "WHERE R.roomid = '" + roomId + "'";
                try (ResultSet resultSet = datasourceConnection.executeStatement(query)) {
                    while (resultSet.next()) {
                        room.setRoomId(resultSet.getString("roomid"));
                        room.setStatus(Room.StatusEnum.fromValue(resultSet.getString("roomStatus")));
                        room.setRoomName(resultSet.getString("roomName"));

                        // add creator
                        String clientId = resultSet.getString("clientid");
                        boolean isCreator = resultSet.getBoolean("creator");

                        if (isCreator) {
                            Player creator = new Player(clientId);
                            room.setCreator(creator);
                            room.addPlayersItem(creator);
                        } else {
                            room.addPlayersItem(new Player(clientId));
                        }

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
                String queryLines = "SELECT L.x,L.y,L.dot1_id,L.dot2_id,L.status,L.clientid " +
                        "FROM Room AS R JOIN Line AS L " +
                        "ON R.roomid = L.roomid WHERE R.roomid = '" + roomId + "'";
                try (ResultSet resultSet = datasourceConnection.executeStatement(queryLines)) {
                    while (resultSet.next()) {
                        CoOrdinate coordinate = new CoOrdinate(resultSet.getInt("x"), resultSet.getInt("y"));

                        Line line = new Line(coordinate);
                        line.setStatus(Line.StatusEnum.fromValue(resultSet.getString("status")));

                        if (resultSet.getString("clientid") != null) {
                            line.setPlayer(new Player(resultSet.getString("clientId")));
                        }

                        /*
                        // dot1
                        CoOrdinate coOrdinate_dot1 = this.gameService.getCoordinateOfDot(resultSet.getInt("dot1_id"));
                        line.setDot1(this.sharedFunctions.findDotBasedOnCoordinate(game.getDots(), coOrdinate_dot1));

                        // dot2
                        CoOrdinate coOrdinate_dot2 = this.gameService.getCoordinateOfDot(resultSet.getInt("dot2_id"));
                        line.setDot2(this.sharedFunctions.findDotBasedOnCoordinate(game.getDots(), coOrdinate_dot2));
                        */
                        game.addLinesItem(line);
                    }
                }

                // adding boxes
                game.setBoxes(new ArrayList<>());
                String queryBoxes = "SELECT B.x,B.y,B.line1_id,B.line2_id,B.line3_id,B.line4_id,B.status,B.clientid " +
                        "FROM Room AS R JOIN Box AS B " +
                        "ON R.roomid = B.roomid WHERE R.roomid = '" + roomId + "'";
                try (ResultSet resultSet = datasourceConnection.executeStatement(queryBoxes)) {
                    while (resultSet.next()) {
                        CoOrdinate coordinate = new CoOrdinate(resultSet.getInt("x"), resultSet.getInt("y"));

                        Box box = new Box(coordinate);
                        box.setStatus(Box.StatusEnum.fromValue(resultSet.getString("status")));

                        if (resultSet.getString("clientid") != null) {
                            box.setPlayer(new Player(resultSet.getString("clientid")));
                        }

                        /*
                        // add line1
                        CoOrdinate coOrdinate_line1 = this.gameService.getCoordinateOfLine(resultSet.getInt("line1_id"));
                        box.setLine1(this.sharedFunctions.findLineBasedOnCoordinate(game.getLines(), coOrdinate_line1));

                        // add line2
                        CoOrdinate coOrdinate_line2 = this.gameService.getCoordinateOfLine(resultSet.getInt("line2_id"));
                        box.setLine2(this.sharedFunctions.findLineBasedOnCoordinate(game.getLines(), coOrdinate_line2));

                        // add line3
                        CoOrdinate coOrdinate_line3 = this.gameService.getCoordinateOfLine(resultSet.getInt("line3_id"));
                        box.setLine3(this.sharedFunctions.findLineBasedOnCoordinate(game.getLines(), coOrdinate_line3));

                        // add line4
                        CoOrdinate coOrdinate_line4 = this.gameService.getCoordinateOfLine(resultSet.getInt("line4_id"));
                        box.setLine4(this.sharedFunctions.findLineBasedOnCoordinate(game.getLines(), coOrdinate_line4));
                       */

                        game.addBoxesItem(box);
                    }
                }

                // adding score
                game.setScores(new ArrayList<>());
                String queryScore = "SELECT S.clientid, S.score " +
                        "FROM Room AS R JOIN Score AS S " +
                        "ON R.roomid = S.roomid WHERE R.roomid = '" + roomId + "'";
                try (ResultSet resultSet = datasourceConnection.executeStatement(queryScore)) {
                    while (resultSet.next()) {
                        Score score = new Score();
                        Player client = new Player(resultSet.getString("clientId"));
                        score.setPlayer(client);
                        score.setScore(resultSet.getInt("score"));
                        game.addScoresItem(score);
                    }
                }
            }

            else {
                String query = "SELECT R.roomid,R.roomName,R.status AS 'roomStatus',PR.username,PR.creator " +
                        "FROM Room AS R JOIN PlayerRoom AS PR ON R.roomid = PR.roomid " +
                        "WHERE R.roomid = '" + roomId + "'";
                try (ResultSet resultSet = datasourceConnection.executeStatement(query)) {
                    while (resultSet.next()) {
                        room.setRoomId(resultSet.getString("roomid"));
                        room.setStatus(Room.StatusEnum.fromValue(resultSet.getString("roomStatus")));
                        room.setRoomName(resultSet.getString("roomName"));

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
                    if (resultSet.getString("status").equals(Room.StatusEnum.OPEN.toString()) ||
                            resultSet.getString("status").equals(Room.StatusEnum.STARTED.toString())) {
                        isCreatorInActiveRoom = true;
                    }
                    else {
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

            String queryRoom = "SELECT 1 FROM Room WHERE roomName = '" + roomName + "'";
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

            String query = "INSERT INTO [Room] (roomid,roomName,status) VALUES " +
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

    public Game createGame(String roomId, String creatorUsername) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            Game game = new Game();

            String query = "INSERT INTO [Game] (roomid,gridSize,status,currentPlayer) VALUES " +
                    "('" + roomId + "'," + game.getGridSize() + ",'" + Game.StatusEnum.WAITING.toString() + "', '" + creatorUsername + "')";
            if (datasourceConnection.executeUpdate(query) <= 0)
                return null;

            Player creator = new Player(creatorUsername);
            game.setCurrentPlayer(creator);

            return game;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean addDots(String roomId, List<Dot> dots) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            for (Dot dot : dots) {
                int x = dot.getCoordinate().getX();
                int y = dot.getCoordinate().getY();

                String query = "INSERT INTO [Dot] (roomid,x,y) VALUES ('" + roomId + "'," + x + "," + y + ");";
                if (datasourceConnection.executeUpdate(query) <= 0)
                    return false;
            }
            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean addLines(String roomId, List<Line> lines) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            for (Line line : lines) {
                int dot1_id = getDot(line.getDot1().getCoordinate());
                int dot2_id = getDot(line.getDot2().getCoordinate());

                int x = line.getCoordinate().getX();
                int y = line.getCoordinate().getY();

                String query = "INSERT INTO [Line] (roomid,x,y,dot1_id,dot2_id,status) VALUES " +
                        "('" + roomId + "'," + x + "," + y + "," + dot1_id + "," + dot2_id + ",'" + Line.StatusEnum.EMPTY.toString() + "');";
                if (datasourceConnection.executeUpdate(query) <= 0)
                    return false;
            }
            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean addBoxes(String roomId, List<Box> boxes) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            for (Box box : boxes) {
                int line1_id = getLine(box.getLine1().getCoordinate());
                int line2_id = getLine(box.getLine2().getCoordinate());
                int line3_id = getLine(box.getLine3().getCoordinate());
                int line4_id = getLine(box.getLine4().getCoordinate());

                int x = box.getCoordinate().getX();
                int y = box.getCoordinate().getY();

                String query = "INSERT INTO [Box] (roomid,x,y,line1_id,line2_id,line3_id,line4_id,status) " +
                        "VALUES ('" + roomId + "'," + x + "," + y + "," + line1_id + "," + line2_id + "," + line2_id +
                        "," + line3_id + "," + line4_id + ")";
                if (datasourceConnection.executeUpdate(query) <= 0)
                    return false;
            }
            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean addScores(String roomId, String creatorUsername) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query = "INSERT INTO [Score] (roomid,clientid,score) VALUES " +
                    "('" + roomId + "','" + creatorUsername + "',0);";
            if (datasourceConnection.executeUpdate(query) <= 0)
                return false;

            datasourceConnection.closeConnection();
            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    private int getDot(CoOrdinate coordinate) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query = "SELECT [id] FROM [Dot] WHERE x=" + coordinate.getX() + " AND y=" + coordinate.getY();
            int dot_id = 0;

            try (ResultSet resultSet = datasourceConnection.executeStatement(query)) {
                if (resultSet.next()) {
                    dot_id = resultSet.getInt("id");
                }
            }
            datasourceConnection.closeConnection();
            return dot_id;
        }
        catch (Exception e) {
            throw e;
        }
    }

    private int getLine(CoOrdinate coordinate) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query = "SELECT [id] FROM [Line] WHERE x=" + coordinate.getX() + " and y=" + coordinate.getY();
            int line_id = 0;

            try (ResultSet resultSet = datasourceConnection.executeStatement(query)) {
                if (resultSet.next()) {
                    line_id = resultSet.getInt("id");
                }
            }
            datasourceConnection.closeConnection();

            return line_id;
        }
        catch (Exception e) {
            throw e;
        }
    }

    private String generateRoomNumber() {
        // Generate a unique room number logic goes here
        return "ROOM" + System.currentTimeMillis();
    }
}
