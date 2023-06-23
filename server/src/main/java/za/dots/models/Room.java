package za.dots.models;

import java.util.ArrayList;
import java.util.List;

public class Room {
    private String roomId = null;

    private String roomName = null;

    private List<Player> players = null;

    private Player creator = null;

    private Game game = null;

    private StatusEnum status = null;

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

        public static StatusEnum fromValue(String text) {
            for (StatusEnum b : StatusEnum.values()) {
                if (String.valueOf(b.value).equals(text)) {
                    return b;
                }
            }
            return null;
        }
    }

    public Room() { }

    public Room (String roomId, String roomName, Player creator) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.creator = creator;
        addPlayersItem(creator);
    }

    public String getRoomId() {
        return roomId;
    }

    public void setRoomId(String roomId) {
        this.roomId = roomId;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public Room addPlayersItem(Player playersItem) {
        if (this.players == null) {
            this.players = new ArrayList<Player>();
        }
        this.players.add(playersItem);
        return this;
    }

    public Player getCreator() {
        return creator;
    }

    public void setCreator(Player creator) {
        this.creator = creator;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public StatusEnum getStatus() {
        return status;
    }

    public void setStatus(StatusEnum status) {
        this.status = status;
    }
}
