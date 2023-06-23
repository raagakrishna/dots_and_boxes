package za.dots.controllers;

import za.dots.controllers.interfaces.PlayerApi;
import za.dots.models.Player;
import za.dots.models.Room;

public class PlayerCrudHandler implements PlayerApi {
    @Override
    public String createPlayer(Player player) {
        return null;
    }

    @Override
    public Room findRoomByUsername(String username, String sessionId) {
        return null;
    }

    @Override
    public Player getPlayerByUsername(String username) {
        return null;
    }

    @Override
    public String loginPlayer(String username, String password) {
        return null;
    }

    @Override
    public String logoutPlayer(String sessionId) {
        return null;
    }

    @Override
    public Player updatePlayer(String username, Player player) {
        return null;
    }
}
