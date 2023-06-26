package za.dots.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.javalin.http.BadRequestResponse;
import io.javalin.http.ConflictResponse;
import io.javalin.http.NotFoundResponse;
import io.javalin.http.NotImplementedResponse;
import za.dots.controllers.interfaces.PlayerApi;
import za.dots.models.JWTResponse;
import za.dots.models.Player;
import za.dots.models.Room;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class PlayerCrudHandler implements PlayerApi {
    @Override
    public String createPlayer(Player player) {
        if (player.getUsername().equals("")) {
            throw new BadRequestResponse("Username was not provided.");
        }

        boolean playerCreated = true;  // TODO: insert player (if username is unique)
        if (!playerCreated)
            throw new ConflictResponse("A player with this username exists.");

        return "Player created successfully.";
    }

    @Override
    public Room findRoomByUsername(String username) {
        // assuming the jwt token is valid and logged in

        Room room = null; // TODO: SELECT Room FROM PlayerRoom where username matches and room is open or started
        if (room == null) {
            throw new NotFoundResponse("A room was not found.");
        }

        return room;
    }

    @Override
    public Player getPlayerByUsername(String username) {
        if (username.equals("")) {
            throw new BadRequestResponse("Username was not provided.");
        }

        Player player = null; // TODO: SELECT player where username matches
        if (player == null) {
            throw new NotFoundResponse("Player was not found.");
        }
        return player;
    }

    @Override
    public String loginPlayer(String username, String password) {
        throw new NotImplementedResponse("This was not implemented.");
    }

    @Override
    public String logoutPlayer(String sessionId) {
        throw new NotImplementedResponse("This was not implemented.");
    }

    @Override
    public Player updatePlayer(String username, Player player) {
        throw new NotImplementedResponse("This was not implemented.");
    }

    @Override
    public JWTResponse registerPlayer(String body) throws IOException {
        URL url = new URL("http://127.0.0.1:7071/register");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestProperty("accept", "application/json");
        connection.setRequestProperty("body", body);
        connection.setRequestMethod("POST");
        InputStream responseStream = connection.getInputStream();
        ObjectMapper mapper = new ObjectMapper();
        return mapper.readValue(responseStream, JWTResponse.class);
    }
}
