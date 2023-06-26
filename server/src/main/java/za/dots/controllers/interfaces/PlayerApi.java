package za.dots.controllers.interfaces;

import za.dots.models.Player;
import za.dots.models.Room;

import java.util.List;

public interface PlayerApi {

    // create a player
    // response 200: Player created successfully (String)
    // response 400: Invalid request
    // response 500: Internal server error
    // response 409: Conflict
    // request mapping: /player
    // body: player (Player: Player to be created)
    // POST request
    String createPlayer(Player player);

    // Get the room the player is currently in
    // response 200: Room found (Room)
    // response 404: Room not found
    // response 400: Invalid request
    // response 500: Internal server error
    // request mapping: /player/{username}/room
    // path: username (String: Username of the player)
    // GET request
    String findRoomByUsername(String username);

    // Get the rooms the player is currently in
    // response 200: Rooms found (List<Room>)
    // response 404: Rooms not found
    // response 400: Invalid request
    // response 500: Internal server error
    // request mapping: /player/{username}/rooms
    // path: username (String: Username of the player)
    // GET request
    List<Room> findRoomsByUsername(String username);

    // Get player by username
    // response 200: Successfully retrieved the player (Player)
    // response 400: Invalid request
    // response 500: Internal server error
    // response 404: Player not found
    // request mapping: /player/{username}
    // path: username (String: Username of player)
    // GET response
    Player getPlayerByUsername(String username);

    // Login a player
    // response 200: Player logged in successfully
    // response 401: Unauthorized
    // response 400: Invalid request
    // response 500: Internal server error
    // request mapping: /player/login
    // query: username (String: Username of player)
    // query: password (String: Password of player)
    // GET response
    String loginPlayer(String username, String password);

    // Logout a player
    // response 400: Player logged out successfully
    // response 401: Unauthorized
    // response 400: Invalid request
    // response 500: Internal server error
    // response 404: Player not found
    // request mapping: /player/logout
    // query: username (String: username of the player to logout)
    // GET response
    String logoutPlayer(String username);

    // Update a player
    // response 400: Player updated successfully
    // response 401: Unauthorized
    // response 400: Invalid request
    // response 500: Internal server error
    // response 404: Player not found
    // request mapping: /player/{username}
    // parameter: username (String: username of player to update)
    // parameter: player (Player: Updated player object)
    // PUT response
    Player updatePlayer(String username, Player player);
}
