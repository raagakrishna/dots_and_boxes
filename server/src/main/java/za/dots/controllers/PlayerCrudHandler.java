package za.dots.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.javalin.http.BadRequestResponse;
import io.javalin.http.ConflictResponse;
import io.javalin.http.NotFoundResponse;
import io.javalin.http.NotImplementedResponse;
import io.javalin.http.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import za.dots.controllers.interfaces.PlayerApi;
import za.dots.db.RoomDao;
import za.dots.models.JWTResponse;
import za.dots.models.Player;
import za.dots.models.Room;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.sql.SQLException;
import java.util.List;

public class PlayerCrudHandler implements PlayerApi {

    private Logger logger;

    public PlayerCrudHandler() {
        this.logger = LoggerFactory.getLogger("PlayerCrudHandler ->");
    }
    private final RoomDao roomDao = new RoomDao();

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
    public String findRoomByUsername(String username) {
        try {
            // assuming the jwt token is valid and logged in

            String room = this.roomDao.findRoomByUsername(username); // SELECT Room FROM PlayerRoom where username matches and room is open or started
            if (room == null) {
                throw new NotFoundResponse("A room was not found.");
            }

            return room;
        }
        catch (SQLException e) {
            throw new InternalServerErrorResponse("The database could not be connected.");
        }
    }

    @Override
    public List<Room> findRoomsByUsername(String username) {
        try {
            // assuming the jwt token is valid and logged in

            // SELECT Room FROM PlayerRoom where username matches and room is open or started
            List<Room> rooms = this.roomDao.findRoomsByUsername(username);
            if (rooms == null) {
                throw new NotFoundResponse("Rooms was not found.");
            }

            return rooms;
        }
        catch (SQLException e) {
            throw new InternalServerErrorResponse("The database could not be connected.");
        }
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
    public JWTResponse loginPlayer(Object body) throws IOException, URISyntaxException, InterruptedException {
        URI url = new URI("http://127.0.0.1:7071/login");
        return getJwtResponse(body, url);
    }

    private JWTResponse getJwtResponse(Object body, URI uri) throws IOException, InterruptedException {
        this.logger.info("getJwtResponse start ->");
        ObjectMapper objectMapper = new ObjectMapper();
        byte[] bytes = objectMapper.writeValueAsString(body).getBytes(StandardCharsets.UTF_8);

        HttpRequest request = HttpRequest.newBuilder()
                .uri(uri)
                .POST(HttpRequest.BodyPublishers.ofString(new String(bytes, StandardCharsets.UTF_8)))
                .build();
        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> httpResponse = client.send(request, HttpResponse.BodyHandlers.ofString());
        if (httpResponse.statusCode() == 200) {
            String bodyObj = httpResponse.body();
            logger.info(bodyObj);
            JWTResponse jwtResponse = objectMapper.readValue(bodyObj, JWTResponse.class);
            logger.info("MESSAGE:" + jwtResponse.getMessage());
            logger.info("TOKEN:" + jwtResponse.getToken());
            logger.info("REFRESH_TOKEN:" + jwtResponse.getRefreshToken());
            return jwtResponse;
        }
        return new JWTResponse();
    }
    public String loginPlayer(String username, String password) {
//        throw new NotImplementedResponse("This was not implemented.");
        return "Logged in successfully";
    }

    @Override
    public String logoutPlayer(String sessionId) {
//        throw new NotImplementedResponse("This was not implemented.");
        return "Logged out successfully";
    }

    @Override
    public Player updatePlayer(String username, Player player) {
        throw new NotImplementedResponse("This was not implemented.");
    }

    @Override
    public JWTResponse registerPlayer(Object body) throws IOException, URISyntaxException, InterruptedException {
        URI url = new URI("http://127.0.0.1:7071/register");
        return getJwtResponse(body, url);
    }
}
