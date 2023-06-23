package za.dots.models;

public class Player {
    private String username = null;

    public Player() { }

    public Player(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
