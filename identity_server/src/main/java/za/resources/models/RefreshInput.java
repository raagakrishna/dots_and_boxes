package za.resources.models;

public class RefreshInput {

    private String token;
    private String refreshToken;

    public RefreshInput(String token, String refreshToken) {
        this.token = token;
        this.refreshToken = refreshToken;
    }

    public RefreshInput() {
    }

    public String getToken() {
        return token;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public String toString() {
        return token + "\n" + refreshToken;
    }
}
