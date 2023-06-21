package za.dots.db;

import java.sql.*;

public class DatasourceConnection {

    Connection connection;

    private String cleanInputValue(String string) {
        return string.replaceAll("[^a-zA-Z\\d]", "");
    }

    public DatasourceConnection() throws SQLException {
        this.connection = DriverManager.getConnection("jdbc:sqlserver://"
                + System.getenv("DB_HOST")//127.0.0.1:1433 for local
                + ";encrypt=true;trustServerCertificate=true;database="
                + System.getenv("DB_NAME") + ";",
                System.getenv("DB_USER"),
                System.getenv("DB_PASS"));
    }
}
