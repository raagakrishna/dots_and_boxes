package za.dots.controllers;

import za.dots.controllers.interfaces.RoomApi;
import za.dots.models.PlayerLine;
import za.dots.models.Room;

import java.util.List;

public class RoomCrudHandler implements RoomApi {
    @Override
    public Room createRoom(String creatorUsername, String sessionId) {
        return null;
    }

    @Override
    public Room deleteRoomById(String roomId, String username) {
        return null;
    }

    @Override
    public Room getRoomById(String roomId) {
        return null;
    }

    @Override
    public List<Room> getRooms() {
        return null;
    }

    @Override
    public Room joinRoom(String roomId, String username) {
        return null;
    }

    @Override
    public Room leaveRoom(String roomId, String username) {
        return null;
    }

    @Override
    public String sendGameState(String roomId, String username, PlayerLine playerLine) {
        return null;
    }

    @Override
    public Room startRoom(String roomId, String username, Integer gridSize) {
        return null;
    }
}
