package za.dots.common;

import za.dots.models.CoOrdinate;
import za.dots.models.Dot;
import za.dots.models.Line;

import java.util.List;

public class SharedFunctions {
    public Dot findDotBasedOnCoordinate(List<Dot> dots, CoOrdinate coordinate) {
        for (Dot dot : dots) {
            if (dot.getCoordinate().getX() == coordinate.getX() && dot.getCoordinate().getY() == coordinate.getY())
                return dot;
        }
        return null;
    }

    public Line findLineBasedOnCoordinate(List<Line> lines, CoOrdinate coordinate) {
        for (Line line : lines) {
            if (line.getCoordinate().getX() == coordinate.getX() && line.getCoordinate().getY() == coordinate.getY()) {
                return line;
            }
        }
        return null;
    }
}
