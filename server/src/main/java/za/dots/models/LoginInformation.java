package za.dots.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class LoginInformation {
    private String password;
    private String username;

    public LoginInformation(String password, String username) {
        this.password = password;
        this.username = username;
    }

    public LoginInformation() {
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
