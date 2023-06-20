package za.dots.models;

import java.util.ArrayList;
import java.util.List;

public class Room {
    private String roomId;
    private String roomName;
    private Integer gridSize;
    private List<Player> players;
    private Player creator;
    private StatusEnum status;

    /**
     * Gets or Sets status
     */
    public enum StatusEnum {
        OPEN("OPEN"),

        CLOSED("CLOSED"),

        STARTED("STARTED");

        private final String value;

        StatusEnum(String value) {
            this.value = value;
        }

        @Override
        public String toString() {
            return String.valueOf(value);
        }
    }



    public Room roomId(String roomId) {
        this.roomId = roomId;
        return this;
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public Room roomName(String roomName) {
        this.roomName = roomName;
        return this;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public Room gridSize(Integer gridSize) {
        this.gridSize = gridSize;
        return this;
    }

    public Integer getGridSize() {
        return gridSize;
    }

    public void setGridSize(Integer gridSize) {
        this.gridSize = gridSize;
    }

    public Room players(List<Player> players) {
        this.players = players;
        return this;
    }

    public Room addPlayersItem(Player playersItem) {
        if (this.players == null) {
            this.players = new ArrayList<Player>();
        }
        this.players.add(playersItem);
        return this;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public Room creator(Player creator) {
        this.creator = creator;
        return this;
    }

    public Player getCreator() {
        return creator;
    }

    public void setCreator(Player creator) {
        this.creator = creator;
    }

    public Room status(StatusEnum status) {
        this.status = status;
        return this;
    }

    public StatusEnum getStatus() {
        return status;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }
}
