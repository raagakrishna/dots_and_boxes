package za.dots.controllers.interfaces;

import za.dots.models.Player;
import za.dots.models.Room;

public interface PlayerApi {

    String createPlayer(Player player);

    Room findRoomByUsername(String username, String sessionId);

    Player getPlayerByUsername(String username);

    String loginPlayer(String username, String password);

    String logoutPlayer(String sessionId);

    Player updatePlayer(String username, Player player);
}
