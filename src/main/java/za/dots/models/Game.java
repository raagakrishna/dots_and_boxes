package za.dots.models;

import java.util.ArrayList;
import java.util.List;

public class Game {
    private String gameId;
    private Room room;
    private Dot dots;
    private List<Score> scores;
    private StatusEnum status;
    private Player winner;

    /**
     * Gets or Sets status
     */
    public enum StatusEnum {
        PLAYING("PLAYING"),

        DONE("DONE"),

        DRAW("DRAW");

        private final String value;

        StatusEnum(String value) {
            this.value = value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }
    }



    public Game gameId(String gameId) {
        this.gameId = gameId;
        return this;
    }

    public String getGameId() {
        return gameId;
    }

    public void setGameId(String gameId) {
        this.gameId = gameId;
    }

    public Game room(Room room) {
        this.room = room;
        return this;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public Game dots(Dot dots) {
        this.dots = dots;
        return this;
    }

    public Dot getDots() {
        return dots;
    }

    public void setDots(Dot dots) {
        this.dots = dots;
    }

    public Game scores(List<Score> scores) {
        this.scores = scores;
        return this;
    }

    public Game addScoresItem(Score scoresItem) {
        if (this.scores == null) {
            this.scores = new ArrayList<Score>();
        }
        this.scores.add(scoresItem);
        return this;
    }

    public List<Score> getScores() {
        return scores;
    }

    public void setScores(List<Score> scores) {
        this.scores = scores;
    }

    public Game status(StatusEnum status) {
        this.status = status;
        return this;
    }

    public StatusEnum getStatus() {
        return status;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }

    public Game winner(Player winner) {
        this.winner = winner;
        return this;
    }

    public Player getWinner() {
        return winner;
    }

    public void setWinner(Player winner) {
        this.winner = winner;
    }
}
