package za.dots.controllers;

import io.javalin.http.NotFoundResponse;
import za.dots.controllers.interfaces.PlayersApi;
import za.dots.models.Player;

import java.util.List;

public class PlayersCrudHandler implements PlayersApi {

    @Override
    public List<Player> getPlayers() {
        List<Player> players = null; // TODO: fetch players from database

        if (players == null) {
            throw new NotFoundResponse("No players found.");
        }
        return players;
    }
}
