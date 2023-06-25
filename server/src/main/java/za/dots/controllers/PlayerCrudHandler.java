package za.dots.controllers;

import io.javalin.http.*;
import za.dots.controllers.interfaces.PlayerApi;
import za.dots.db.RoomDao;
import za.dots.models.Player;
import za.dots.models.Room;

import java.sql.SQLException;

public class PlayerCrudHandler implements PlayerApi {

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
    public Room findRoomByUsername(String username) {
        try {
            // assuming the jwt token is valid and logged in

            Room room = this.roomDao.findRoomByUsername(username); // TODO: SELECT Room FROM PlayerRoom where username matches and room is open or started
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
}
