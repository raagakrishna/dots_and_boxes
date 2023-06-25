package za.dots;

import io.javalin.Javalin;
import za.dots.controllers.PlayerCrudHandler;
import za.dots.controllers.PlayersCrudHandler;
import za.dots.controllers.RoomCrudHandler;
import za.dots.models.CoOrdinate;
import za.dots.models.Player;

import java.sql.SQLException;

import static io.javalin.apibuilder.ApiBuilder.*;

public class App
{
    public static void main( String[] args ) throws SQLException {
        PlayerCrudHandler playerCrudHandler = new PlayerCrudHandler();
        PlayersCrudHandler playersCrudHandler = new PlayersCrudHandler();
        RoomCrudHandler roomCrudHandler = new RoomCrudHandler();
        Javalin app = Javalin.create(config ->
                config.plugins.enableCors(cors -> {
                    cors.add(it -> {
                        it.anyHost();
                    });
                })
        ).start(8080);

        app.routes(() -> {
            // room
            path("room", () -> {
               // getRooms
                get(ctx -> {
                    ctx.json(roomCrudHandler.getRooms());
                });
               // createRoom
                post(ctx -> {
                    ctx.json(
                            roomCrudHandler.createRoom(ctx.queryParam("creatorUsername"), ctx.queryParam("roomName"))
                    );
                });
                path("{roomId}", () -> {
                    // deleteRoomById
                    delete("delete/{username}", ctx -> {
                        ctx.json(
                                roomCrudHandler.deleteRoomById(ctx.pathParam("roomId"), ctx.pathParam("username"))
                        );
                    });
                    // getRoomById
                    get(ctx -> {
                        ctx.json(
                                roomCrudHandler.getRoomById(ctx.pathParam("roomId"))
                        );
                    });
                    // joinRoom
                    post("join/{username}", ctx -> {
                        ctx.json(
                                roomCrudHandler.joinRoom(ctx.pathParam("roomId"), ctx.pathParam("username"))
                        );
                    });
                    // leaveRoom
                    post("leave/{username}", ctx -> {
                        ctx.json(
                                roomCrudHandler.leaveRoom(ctx.pathParam("roomId"), ctx.pathParam("username"))
                        );
                    });
                   // sendGameState
                    post("sendPlayerMove/{username}", ctx -> {
                       ctx.json(
                               roomCrudHandler.sendGameState(ctx.pathParam("roomId"), ctx.pathParam("username"), ctx.bodyAsClass(CoOrdinate.class))
                       );
                    });
                    // startRoom
                    get("start/{username}", ctx -> {
                        ctx.json(
                                roomCrudHandler.startRoom(ctx.pathParam("roomId"), ctx.pathParam("username"))
                        );
                    });
                });
           });

            path("players", () -> {
                // getPlayers
                get(ctx -> {
                    ctx.json(
                            playersCrudHandler.getPlayers()
                    );
                });
            });

            // player
            path("player", () -> {
                // createPlayer
                post(ctx -> {
                    ctx.result(
                            playerCrudHandler.createPlayer(ctx.bodyAsClass(Player.class))
                    );
                });
                path("{username}", () -> {
                    // findRoomByUsername
                    get("room", ctx -> {
                        ctx.json(
                                playerCrudHandler.findRoomByUsername(ctx.pathParam("username"))
                        );
                    });
                    // getPlayerByUsername
                    get(ctx -> {
                        ctx.json(
                                playerCrudHandler.getPlayerByUsername(ctx.pathParam("username"))
                        );
                    });
                    // updatePlayer
                    put(ctx -> {
                        ctx.json(
                                playerCrudHandler.updatePlayer(ctx.pathParam("username"), ctx.bodyAsClass(Player.class))
                        );
                    });
                    get("logout", ctx -> {
                        ctx.result(
                                playerCrudHandler.logoutPlayer(ctx.pathParam("username"))
                        );
                    });
                });
                // loginPlayer
                post("login", ctx -> {
                    ctx.result(
                            playerCrudHandler.loginPlayer(ctx.queryParam("username"), ctx.queryParam("password"))
                    );
                });
                // logoutPlayer
            });

        });
    }
}
