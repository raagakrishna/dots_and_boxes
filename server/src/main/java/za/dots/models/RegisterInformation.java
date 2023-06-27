package za.dots.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class RegisterInformation {

    private String email;
    private String password;
    private String username;

    public RegisterInformation(String email, String password, String username) {
        this.email = email;
        this.password = password;
        this.username = username;
    }

    public RegisterInformation() {
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
