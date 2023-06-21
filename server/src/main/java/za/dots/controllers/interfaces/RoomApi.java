package za.dots.controllers.interfaces;

import za.dots.models.Room;

import java.util.List;
public interface RoomApi {

    Room createRoom(String creatorUsername, String sessionId);

    Room deleteRoomById(String roomId, String username, String sessionId);

    Room getRoomById(String roomId);

    List<Room> getRooms();

    Room joinRoom(String roomId, String username, String sessionId);

    Room leaveRoom(String roomId, String username, String sessionId);

    Void startRoom(String roomId, String username, String sessionId);
}
