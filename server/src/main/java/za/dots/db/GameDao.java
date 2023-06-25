package za.dots.db;

import za.dots.models.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class GameDao {
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
                        "('" + roomId + "'," + x + "," + y + "," + dot1_id + "," + dot2_id + ",'" +
                        Line.StatusEnum.EMPTY.toString() + "');";
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
                        "VALUES ('" + roomId + "'," + x + "," + y + "," + line1_id + "," + line2_id + "," +
                        line3_id + "," + line4_id + ",'" + box.getStatus().toString() + "')";
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

            String query = "INSERT INTO [Score] (roomid,username,score) VALUES " +
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

    public boolean deletePlayerScore(String roomId, String username) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query1 = "DELETE FROM [Score] WHERE roomid = '" + roomId + "' AND username = '" + username + "'";
            if (datasourceConnection.executeUpdate(query1) <= 0)
                return false;

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

    public CoOrdinate getCoordinateOfDot(int dot_id) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query = "SELECT x,y FROM [Dot] WHERE id=" + dot_id;
            CoOrdinate coordinate = null;
            try (ResultSet resultSet = datasourceConnection.executeStatement(query)) {
                if (resultSet.next()) {
                    coordinate = new CoOrdinate(resultSet.getInt("x"), resultSet.getInt("y"));
                }
            }
            return coordinate;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public CoOrdinate getCoordinateOfLine(int line_id) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query = "SELECT x,y FROM [Line] WHERE id=" + line_id;
            CoOrdinate coordinate = null;
            try (ResultSet resultSet = datasourceConnection.executeStatement(query)) {
                if (resultSet.next()) {
                    coordinate = new CoOrdinate(resultSet.getInt("x"), resultSet.getInt("y"));
                }
            }

            return coordinate;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean updateLine(String roomId, String username, int x, int y) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query = "UPDATE [Line] SET status = '" + Line.StatusEnum.OCCUPIED + "', username = '" +
                    username+ "' WHERE x = " + x + " AND y = " + y + " AND roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(query) <= 0)
                return false;

            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean updateBoxCompleted(String roomId, String username, int x, int y) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query = "UPDATE [Box] SET status = '" + Line.StatusEnum.OCCUPIED + "', username = '" +
                    username+ "' WHERE x = " + x + " AND y = " + y + " AND roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(query) <= 0)
                return false;

            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean updatePlayerScore(String roomId, String username, int score) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query = "UPDATE [Score] SET score = " + score + " WHERE username = '" +
                    username + "' AND roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(query) <= 0)
                return false;

            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean updateWinner(String roomId, String winnerName, Game.StatusEnum gameStatus) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query = "";
            // no winner
            if (winnerName.equals("")) {
                query = "UPDATE [Game] SET status = '" + gameStatus + "' WHERE roomid = '" + roomId + "'";
            }
            else {
                query = "UPDATE [Game] SET staus = '" + gameStatus + "', winner = '" + winnerName  + "' WHERE roomid = ''";
            }

            if (datasourceConnection.executeUpdate(query) <= 0)
                return false;

            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

    public boolean updateCurrentPlayer (String roomId, String currentPlayer) throws SQLException {
        try {
            DatasourceConnection datasourceConnection = new DatasourceConnection();

            String query = "UPDATE [Game] SET currentplayer = '" + currentPlayer + "' WHERE roomid = '" + roomId + "'";
            if (datasourceConnection.executeUpdate(query) <= 0)
                return false;

            return true;
        }
        catch (Exception e) {
            throw e;
        }
    }

}
