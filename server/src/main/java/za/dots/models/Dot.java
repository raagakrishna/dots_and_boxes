package za.dots.models;

public class Dot {
    private CoOrdinate coordinate = null;

    public Dot() { }

    public Dot(CoOrdinate coordinate) {
        this.coordinate = coordinate;
    }

    public CoOrdinate getCoordinate() {
        return coordinate;
    }

    public void setCoordinate(CoOrdinate coordinate) {
        this.coordinate = coordinate;
    }

}
