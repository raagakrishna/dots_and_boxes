package za.dots.models;

import java.util.ArrayList;
import java.util.List;

public class Game {
    private Integer gridSize = 9;

    private List<Dot> dots = null;

    private List<Line> lines = null;

    private List<Box> boxes = null;

    private List<Score> scores = null;

    private StatusEnum status;

    private Player currentPlayer = null;

    private Player winner;

    public Game() {
        this.status = StatusEnum.WAITING;
    }

    public Game(Integer gridSize) {
        this.gridSize = gridSize;
        this.status = StatusEnum.PLAYING;
    }

    public enum StatusEnum {
        WAITING("WAITING"),

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

        public static StatusEnum fromValue(String text) {
            for (StatusEnum b : StatusEnum.values()) {
                if (String.valueOf(b.value).equals(text)) {
                    return b;
                }
            }
            return null;
        }
    }

    public Integer getGridSize() {
        return gridSize;
    }

    public void setGridSize(Integer gridSize) {
        this.gridSize = gridSize;
    }

    public List<Dot> getDots() {
        return dots;
    }

    public void setDots(List<Dot> dots) {
        this.dots = dots;
    }

    public Game addDotsItem(Dot dotsItem) {
        if (this.dots == null) {
            this.dots = new ArrayList<Dot>();
        }
        this.dots.add(dotsItem);
        return this;
    }

    public List<Line> getLines() {
        return lines;
    }

    public void setLines(List<Line> lines) {
        this.lines = lines;
    }

    public Game addLinesItem(Line linesItem) {
        if (this.lines == null) {
            this.lines = new ArrayList<Line>();
        }
        this.lines.add(linesItem);
        return this;
    }

    public List<Box> getBoxes() {
        return boxes;
    }

    public void setBoxes(List<Box> boxes) {
        this.boxes = boxes;
    }

    public Game addBoxesItem(Box boxesItem) {
        if (this.boxes == null) {
            this.boxes = new ArrayList<Box>();
        }
        this.boxes.add(boxesItem);
        return this;
    }

    public List<Score> getScores() {
        return scores;
    }

    public void setScores(List<Score> scores) {
        this.scores = scores;
    }

    public Game addScoresItem(Score scoresItem) {
        if (this.scores == null) {
            this.scores = new ArrayList<Score>();
        }
        this.scores.add(scoresItem);
        return this;
    }

    public StatusEnum getStatus() {
        return status;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }

    public Player getCurrentPlayer() {
        return currentPlayer;
    }

    public void setCurrentPlayer(Player currentPlayer) {
        this.currentPlayer = currentPlayer;
    }

    public Player getWinner() {
        return winner;
    }

    public void setWinner(Player winner) {
        this.winner = winner;
    }
}
