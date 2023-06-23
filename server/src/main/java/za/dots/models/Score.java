package za.dots.models;

public class Score {
    private Player player = null;

    private Integer score = null;

    public Score() { }

    public Score(Player player) {
        this.player = player;
        this.score = 0;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }
}
