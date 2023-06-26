package za.dots;

import io.javalin.Javalin;
import io.javalin.community.ssl.SSLPlugin;
import io.javalin.http.staticfiles.Location;
import za.dots.controllers.PlayerCrudHandler;
import za.dots.controllers.PlayersCrudHandler;
import za.dots.controllers.RoomCrudHandler;
import za.dots.models.CoOrdinate;
import za.dots.models.Player;

import io.javalin.websocket.WsContext;
import za.dots.models.Room;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import static io.javalin.apibuilder.ApiBuilder.*;

public class App {

    private static Map<String, WsContext> roomSessions = new ConcurrentHashMap<>();

    public static void main( String[] args ) {
        SSLPlugin sslPlugin = new SSLPlugin(conf -> {
            conf.pemFromPath(
                    System.getenv("CERT_PATH"),
                    System.getenv("CERT_PATH_KEY"),
                    System.getenv("CERT_PASS"));
        });
        PlayerCrudHandler playerCrudHandler = new PlayerCrudHandler();
        PlayersCrudHandler playersCrudHandler = new PlayersCrudHandler();
        RoomCrudHandler roomCrudHandler = new RoomCrudHandler();
        Javalin app = Javalin.create(config -> {
            config.plugins.register(sslPlugin);
            config.plugins.enableCors(cors -> {
                cors.add(it -> {
                    it.anyHost();
                });
            config.staticFiles.add("/home/ubuntu/dots_and_boxes/site", Location.EXTERNAL);
            });}
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
                            roomCrudHandler.createRoom(ctx.queryParam("creatorUsername"), ctx.queryParam("roomName"), Integer.valueOf(ctx.queryParam("gridSize")))
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
                        String roomId = ctx.pathParam("roomId");
                        Room room = roomCrudHandler.joinRoom(roomId, ctx.pathParam("username"));
                        broadcastRoom(roomId, room);
                        ctx.json(room);
                    });
                    // leaveRoom
                    post("leave/{username}", ctx -> {
                        String roomId = ctx.pathParam("roomId");
                        Room room = roomCrudHandler.leaveRoom(roomId, ctx.pathParam("username"));
                        broadcastRoom(roomId, room);
                        ctx.json(room);
                    });
                   // sendGameState
                    post("sendPlayerMove/{username}", ctx -> {
                        String roomId = ctx.pathParam("roomId");
                        Room room = roomCrudHandler.sendGameState(roomId, ctx.pathParam("username"), ctx.bodyAsClass(CoOrdinate.class));
                        broadcastRoom(roomId, room);
                        ctx.json(room);
                    });
                    // startRoom
                    get("start/{username}", ctx -> {
                        String roomId = ctx.pathParam("roomId");
                        Room room = roomCrudHandler.startRoom(roomId, ctx.pathParam("username"));
                        broadcastRoom(roomId, room);
                        ctx.json(room);
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

        app.ws("/room/{roomId}", ws -> {
            ws.onConnect(ctx -> {
                String roomId = ctx.pathParam("roomId");
                roomSessions.put(roomId, ctx);
            });

            ws.onClose(ctx -> {
                String roomId = ctx.pathParam("roomId");
                roomSessions.remove(roomId);
            });

            ws.onMessage(ctx -> {
                String roomId = ctx.pathParam("roomId");
                String message = ctx.message();
            });
        });
    }

    // Sends a message from one user to all users, along with a list of current usernames
    private static void broadcastRoom(String roomId, Room message) {
        WsContext session = roomSessions.get(roomId);
        if (session != null) {
            session.send(message);
        }
    }
}
