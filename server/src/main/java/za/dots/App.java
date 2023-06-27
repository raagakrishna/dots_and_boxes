package za.dots;

import io.javalin.Javalin;
import io.javalin.community.ssl.SSLPlugin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import za.dots.controllers.BackendJWTVerify;
import io.javalin.http.staticfiles.Location;
import za.dots.common.ResourceAccessValidate;
import za.dots.controllers.PlayerCrudHandler;
import za.dots.controllers.PlayersCrudHandler;
import za.dots.controllers.RoomCrudHandler;
import za.dots.models.CoOrdinate;
import za.dots.models.LoginInformation;
import za.dots.models.Player;
import io.javalin.http.staticfiles.Location;
import io.javalin.http.HttpStatus;
import za.dots.models.RegisterInformation;
import io.javalin.websocket.WsContext;
import za.dots.models.Room;

import java.io.IOException;
import java.net.URISyntaxException;
import java.sql.SQLException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import static io.javalin.apibuilder.ApiBuilder.*;

public class App {

    private static Map<WsContext, String> roomSessions = new ConcurrentHashMap<>();

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

        app.before("/room/*", ctx -> {
          if (!BackendJWTVerify.validate(ctx.header("Authorization"))) {
                ctx.status(403);
            }
        });
        app.before("/player/*", ctx -> {
          if (!BackendJWTVerify.validate(ctx.header("Authorization"))) {
                ctx.status(403);
            }
        });
        app.before("/players/*", ctx -> {
          if (!BackendJWTVerify.validate(ctx.header("Authorization"))) {
                ctx.status(403);
            }
        });

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
                        String roomId = ctx.pathParam("roomId");
                        Room room = roomCrudHandler.deleteRoomById(roomId, ctx.pathParam("username"));
                        broadcastRoom(roomId, room);
                        ctx.json(room);
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
                    // findRoomsByUsername
                    get("rooms", ctx -> {
                        ctx.json(
                                playerCrudHandler.findRoomsByUsername(ctx.pathParam("username"))
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
                    try {
                        ctx.header("Authorization", "Bearer " +
                                playerCrudHandler.loginPlayer(ctx.bodyAsClass(LoginInformation.class)).getToken());
                        ctx.status(200);
                    } catch (IOException e) {
                        ctx.status(400);
                    } catch (URISyntaxException e) {
                        ctx.status(403);
                    } catch (InterruptedException e) {
                        ctx.status(500);
                    }
                });
                //register a player
                post("register", ctx -> {
                    try {
                        ctx.header("Authorization", "Bearer " +
                                playerCrudHandler.registerPlayer(ctx.bodyAsClass(RegisterInformation.class)).getToken());
                        ctx.status(200);
                    } catch (IOException e) {
                        ctx.status(400);
                    } catch (URISyntaxException e) {
                        ctx.status(403);
                    } catch (InterruptedException e) {
                        ctx.status(500);
                    }
                });
            });

        });

        app.ws("/room/{roomId}", ws -> {
            ws.onConnect(ctx -> {
                String roomId = ctx.pathParam("roomId");
                roomSessions.put(ctx, roomId);
            });

            ws.onClose(ctx -> {
                String roomId = ctx.pathParam("roomId");
                roomSessions.remove(ctx);
            });

            ws.onMessage(ctx -> {
                String roomId = ctx.pathParam("roomId");
                Room room = roomCrudHandler.getRoomById(roomId);
                broadcastRoom(roomId, room);
            });
        });
    }

    // Sends a message from one user to all users, along with a list of current usernames
    private static void broadcastRoom(String roomId, Room message) {
        for (Map.Entry<WsContext, String> entry : roomSessions.entrySet()) {
            String roomKey = entry.getValue();
            WsContext session = entry.getKey();
            if (roomKey.equals(roomId) ) {
                session.send(message);
            }
        }
    }
}
