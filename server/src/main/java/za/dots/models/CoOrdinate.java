package za.dots.models;

public class CoOrdinate {

    private Integer x = null;

    private Integer y = null;

    public CoOrdinate(){ }

    public CoOrdinate(Integer x, Integer y) {
        this.x = x;
        this.y = y;
    }

    public Integer getX() {
        return x;
    }

    public void setX(Integer x) {
        this.x = x;
    }

    public Integer getY() {
        return y;
    }

    public void setY(Integer y) {
        this.y = y;
    }

}