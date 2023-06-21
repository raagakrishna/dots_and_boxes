package za.dots.models;

public class Dot {
    private Integer x;
    private Integer y;
    private StatusEnum status;
    private Player player;

    /**
     * Gets or Sets status
     */
    public enum StatusEnum {
        EMPTY("EMPTY"),

        OCCUPIED("OCCUPIED");

        private final String value;

        StatusEnum(String value) {
            this.value = value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }

    }

    public Dot x(Integer x) {
        this.x = x;
        return this;
    }

    public Integer getX() {
        return x;
    }

    public void setX(Integer x) {
        this.x = x;
    }

    public Dot y(Integer y) {
        this.y = y;
        return this;
    }

    public Integer getY() {
        return y;
    }

    public void setY(Integer y) {
        this.y = y;
    }

    public Dot status(StatusEnum status) {
        this.status = status;
        return this;
    }

    public StatusEnum getStatus() {
        return status;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }

    public Dot player(Player player) {
        this.player = player;
        return this;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }
}
