package za.dots.controllers.interfaces;

import za.dots.models.Player;

import java.util.List;

public interface PlayersApi {
    // get all players
    // response 200: Successfully retrieved all players (List<Player>)
    // response 400: Invalid request
    // response 500: Internal server error
    // request mapping: /players
    // GET request
    List<Player> getPlayers();
}
