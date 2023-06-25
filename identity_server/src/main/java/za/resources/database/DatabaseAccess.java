package za.resources.database;

import za.resources.cryptography.PasswordManager;
import za.resources.cryptography.SaltGenerator;
import za.resources.environment.EnvironmentVariables;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Optional;

public class DatabaseAccess {

    private static final String connectionURl =
            "jdbc:sqlserver://;serverName=" + EnvironmentVariables.dbUrl + ";databaseName=" + EnvironmentVariables.dbName
                    + ";username=" + EnvironmentVariables.dbUsername + ";password=" + EnvironmentVariables.dbPassword
                    + ";encrypt=true;trustServerCertificate=true;";


    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(connectionURl);
    }

    public static boolean insertUser(String username, String email, String password) {
        final String salt = SaltGenerator.generateSalt();
        final String hashedPassword = PasswordManager.hashPassword(password, salt);
        final String sql = "{call InsertUser(?, ?, ?, ?)}";
        try (Connection connection = getConnection(); CallableStatement statement = connection.prepareCall(sql)) {
            statement.setString(1, username);
            statement.setString(2, email);
            statement.setString(3, hashedPassword);
            statement.setString(4, salt);
            statement.execute();
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
            return false;
        }
        return true;
    }

    public static boolean userExists(String username, String password) {
        final String query = "SELECT HashedPassword, Salt FROM LoginInfo WHERE Username = ?";
        Optional<String> hashedPassword = Optional.empty();
        String salt = "";
        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, username);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                hashedPassword = Optional.ofNullable(resultSet.getString("HashedPassword"));
                salt = resultSet.getString("Salt");
            }
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
            return false;
        }
        final String finalSalt = salt;
        return hashedPassword.map(hp -> hp.equals(PasswordManager.hashPassword(password, finalSalt)))
                .orElse(false);
    }

    public static void insertUUID(String username, String uuid) {
        String query = "UPDATE RefreshUUIDS SET UUID = ? WHERE Username = ?";
        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(2, username);
            statement.setString(1, uuid);
            statement.execute();
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
        }
    }

    public static boolean validateUUID(String username, String uuid) {
        String query = "SELECT UUID FROM RefreshUUIDS WHERE Username = ?";
        Optional<String> dbUUID = Optional.empty();
        try (Connection connection = getConnection(); PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, username);
            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                dbUUID = Optional.ofNullable(resultSet.getString("UUID"));
            }
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
            invalidateUUID(username);
            return false;
        }
        boolean returnValue =
                dbUUID.map(potentialUUID -> potentialUUID.equals(uuid)).orElse(false);
        if (!returnValue) {
            invalidateUUID(username);
        }
        return returnValue;
    }

    private static void invalidateUUID(String username) {
        insertUUID(username, null);
    }

    public static boolean UpdatePassword(String email, String password) {
        final String salt = SaltGenerator.generateSalt();
        final String hashedPassword = PasswordManager.hashPassword(password, salt);
        final String sql = "{call UpdatePassword(?, ?, ?)}";
        try (Connection connection = getConnection(); CallableStatement statement = connection.prepareCall(sql)) {
            statement.setString(1, email);
            statement.setString(2, hashedPassword);
            statement.setString(3, salt);
            statement.execute();
        } catch (SQLException sqlException) {
            sqlException.printStackTrace();
            return false;
        }
        return true;
    }


}
