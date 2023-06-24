package za.resources.environment;

public class EnvironmentVariables {

    public static final String privateKeyLocation = System.getenv("privateKey");
    public static final String publicKeyLocation = System.getenv("publicKey");
    public static final String issuer = System.getenv("issuer");
    public static final String audience = System.getenv("audience");
    public static final String dbUsername = System.getenv("dbUsername");
    public static final String dbPassword = System.getenv("dbPassword");
    public static final String dbUrl = System.getenv("dbUrl");
    public static final String dbName = System.getenv("dbName");


}
