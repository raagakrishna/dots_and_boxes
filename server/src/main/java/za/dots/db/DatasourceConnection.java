package za.dots.db;

import java.sql.*;

public class DatasourceConnection {

    Connection connection;

    public DatasourceConnection() throws SQLException {
        this.connection = DriverManager.getConnection("jdbc:sqlserver://"
                + System.getenv("DB_HOST")//127.0.0.1:1433 for local
                + ";encrypt=true;trustServerCertificate=true;database="
                + System.getenv("DB_NAME") + ";",
                System.getenv("DB_USER"),
                System.getenv("DB_PASS"));
    }

    public void closeConnection() throws SQLException {
        this.connection.close();
    }

    public String cleanSQL(String sql) {
        //some logic to remove / escape all T-SQL special chars to prevent SQL injection
//        String result = sql.replaceAll("SOME REGEX FOR T-SQL SPECIAL CHARS", "\\");
        return sql;
    }

    public ResultSet executeStatement(String sql) throws SQLException {
        return this.connection.createStatement().executeQuery(
                cleanSQL(sql)
        );
    }

    public int executeUpdate(String sql) throws SQLException {
        return this.connection.prepareStatement(
                cleanSQL(sql)
        ).executeUpdate();
    }
}
