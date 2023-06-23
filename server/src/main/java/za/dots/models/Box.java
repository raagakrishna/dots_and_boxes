package za.dots.models;

public class Box {
    private CoOrdinate coordinate = null;

    private Line line1 = null;

    private Line line2 = null;

    private Line line3 = null;

    private Line line4 = null;

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

    public Box() { }

    public Box(CoOrdinate coordinate) {
        this.coordinate = coordinate;
        this.status = StatusEnum.EMPTY;
    }

    public CoOrdinate getCoordinate() {
        return coordinate;
    }

    public void setCoordinate(CoOrdinate coordinate) {
        this.coordinate = coordinate;
    }

    public Line getLine1() {
        return line1;
    }

    public void setLine1(Line line1) {
        this.line1 = line1;
    }

    public Line getLine2() {
        return line2;
    }

    public void setLine2(Line line2) {
        this.line2 = line2;
    }

    public Line getLine3() {
        return line3;
    }

    public void setLine3(Line line3) {
        this.line3 = line3;
    }

    public Line getLine4() {
        return line4;
    }

    public void setLine4(Line line4) {
        this.line4 = line4;
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