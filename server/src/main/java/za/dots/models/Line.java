package za.dots.models;

public class Line {
    private CoOrdinate coordinate = null;

    private Dot dot1 = null;

    private Dot dot2 = null;

    private StatusEnum status = null;

    private Player player = null;

    public enum StatusEnum {
        EMPTY("EMPTY"),

        OCCUPIED("OCCUPIED");

        private String value;

        StatusEnum(String value) {
            this.value = value;
        }

        public String getValue() {
            return value;
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

    public Line() { }

    public Line(CoOrdinate coordinate){
        this.coordinate = coordinate;
        this.status = StatusEnum.EMPTY;
    }

    public CoOrdinate getCoordinate() {
        return coordinate;
    }

    public void setCoordinate(CoOrdinate coordinate) {
        this.coordinate = coordinate;
    }

    public Dot getDot1() {
        return dot1;
    }

    public void setDot1(Dot dot1) {
        this.dot1 = dot1;
    }

    public Dot getDot2() {
        return dot2;
    }

    public void setDot2(Dot dot2) {
        this.dot2 = dot2;
    }

    public StatusEnum getStatus() {
        return status;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }
}
