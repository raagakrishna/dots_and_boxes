package za.dots.models;

public class PlayerLine {
    private String username = null;

    private Integer lineX = null;

    private Integer lineY = null;

    public PlayerLine() { }

    public PlayerLine(String username, Integer lineX, Integer lineY) {
        this.username = username;
        this.lineX = lineX;
        this.lineY = lineY;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getLineX() {
        return lineX;
    }

    public void setLineX(Integer lineX) {
        this.lineX = lineX;
    }

    public Integer getLineY() {
        return lineY;
    }

    public void setLineY(Integer lineY) {
        this.lineY = lineY;
    }
}
