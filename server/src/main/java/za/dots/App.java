package za.dots;

import io.javalin.Javalin;
import io.javalin.community.ssl.SSLPlugin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import za.dots.controllers.PlayerCrudHandler;
import za.dots.controllers.PlayersCrudHandler;
import za.dots.controllers.RoomCrudHandler;
import za.dots.models.CoOrdinate;
import za.dots.models.Player;
import io.javalin.http.staticfiles.Location;
import io.javalin.http.HttpStatus;


import java.io.IOException;
import java.net.URISyntaxException;
import java.sql.SQLException;

import static io.javalin.apibuilder.ApiBuilder.*;

public class App
{
    public static void main( String[] args )
    {
        Logger logger = LoggerFactory.getLogger("BACKEND SERV ->");
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

        app.before((ctx) -> {
           logger.info("Javalin Before ->", ctx);
        });

        app.after((ctx) -> {
            logger.info("Javalin After ->", ctx);
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
                    try {
                        ctx.header("Authorization", "Bearer " + playerCrudHandler.loginPlayer(ctx.body()).getToken());
                        ctx.redirect("/", HttpStatus.OK);
                    } catch (IOException e) {
                        logger.error("IOException", e);
                        ctx.redirect("/", HttpStatus.UNAUTHORIZED);
                    } catch (URISyntaxException e) {
                        logger.error("URISyntaxException", e);
                        ctx.redirect("/", HttpStatus.BAD_REQUEST);
                    } catch (InterruptedException e) {
                        logger.error("InterruptedException", e);
                        ctx.redirect("/", HttpStatus.INTERNAL_SERVER_ERROR);
                    }
                });
                //register a player
                post("register", ctx -> {
                    try {
                        ctx.header("Authorization", "Bearer " + playerCrudHandler.registerPlayer(ctx.body()).getToken());
                        ctx.redirect("/", HttpStatus.OK);
                    } catch (IOException e) {
                        logger.error("IOException", e);
                        ctx.redirect("/", HttpStatus.UNAUTHORIZED);
                    } catch (URISyntaxException e) {
                        logger.error("URISyntaxException", e);
                        ctx.redirect("/", HttpStatus.BAD_REQUEST);
                    } catch (InterruptedException e) {
                        logger.error("InterruptedException", e);
                        ctx.redirect("/", HttpStatus.INTERNAL_SERVER_ERROR);
                    }
                });
            });

        });
    }
}
