package za.dots.models;

public class JWTResponse {

    private String token;
    private String refreshToken;

    private String message;

    public JWTResponse() {
        super();
    }

    public JWTResponse(String token, String refreshToken, String message) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.message = message;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public String getToken() {
        return token;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
