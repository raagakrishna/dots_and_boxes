package za.dots.controllers.interfaces;

import za.dots.models.CoOrdinate;
import za.dots.models.Room;

import java.sql.SQLException;
import java.util.List;
public interface RoomApi {
    // create a room
    // response 200: Room created successfully (Room)
    // response 400: Invalid request
    // response 401: Unauthorized
    // response 500: Internal server error
    // response 409: Conflict
    // request mapping: /room
    // query: creatorUsername (String: Username of the creator)
    // query: roomName (String: Game room name)
    // POST request
    Room createRoom(String creatorUsername, String roomName, Integer gridSize) throws SQLException;

    // delete a room
    // response 200: Room deleted successfully (Room)
    // response 400: Invalid request
    // response 401: Unauthorized
    // response 500: Internal server error
    // response 404: Player or room not found
    // request mapping: /room/{roomId}/delete/{username}
    // path: roomId (String: ID of the room to delete)
    // path: username (String: username of the player deleting the room)
    // DELETE request
    Room deleteRoomById(String roomId, String username) throws SQLException;

    // Get room by ID
    // response 200: Successfully retrieved the room (Room)
    // response 400: Invalid request
    // response 500: Internal server error
    // response 404: Room not found
    // request mapping: /room/{roomId}
    // path: roomId (String: ID of the room)
    // GET request
    Room getRoomById(String roomId) throws SQLException;

    // get all rooms
    // response 200: Successfully retrieved all rooms (List<Room>)
    // response 400: Invalid request
    // response 500: Internal server error
    // request mapping: /room
    // GET request
    List<Room> getRooms();

    // join a room
    // response 200: Successfully joined the room (Room)
    // response 400: Invalid request
    // response 401: Unauthorized
    // response 500: Internal server error
    // response 404: Player or room not found
    // response 409: Conflict
    // request mapping: /room/{roomId}/join/{username}
    // path: roomId (String: ID of the room to join)
    // path: username (String: username of the player joining the room)
    // POST request
    Room joinRoom(String roomId, String username) throws SQLException;

    // leave a room
    // response 200: Successfully left the room (Room)
    // response 400: Invalid request
    // response 401: Unauthorized
    // response 500: Internal server error
    // response 404: Player or room not found
    // response 409: Conflict
    // request mapping: /room/{roomId}/leave/{username}
    // path: roomId (String: ID of the room to leave)
    // path: username (String: username of the player leaving the room)
    // POST request
    Room leaveRoom(String roomId, String username) throws SQLException;

    // send the game state
    // response 200: Game state successfully received (String)
    // response 400: Invalid request
    // response 401: Unauthorized
    // response 500: Internal server error
    // response 404: Player or room not found
    // request mapping: /room/{roomId}/sendPlayerMove/{username}
    // path: roomId (String: ID of the room)
    // path: username (String: username of the player playing the game)
    // body: coordinate (CoOrdinate: the line the player has played)
    // POST request
    String sendGameState(String roomId, String username, CoOrdinate coordinate) throws SQLException;

    // start a room
    // response 200: Room started successfully (Room)
    // response 400: Invalid request
    // response 401: Unauthorized
    // response 500: Internal server error
    // response 404: Player or room not found
    // request mapping: /room/{roomId}/start/{username}
    // path: roomId (String: ID of the room to start)
    // path: username (String: username of the player starting the game)
    // GET request
    Room startRoom(String roomId, String username) throws SQLException;

}
