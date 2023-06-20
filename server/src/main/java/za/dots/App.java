package za.dots;

import io.javalin.*;
import za.dots.controllers.PlayerCrudHandler;
import za.dots.controllers.PlayersCrudHandler;
import za.dots.controllers.RoomCrudHandler;
import za.dots.models.Player;
import static io.javalin.apibuilder.ApiBuilder.*;

public class App
{
    public static void main( String[] args )
    {
        PlayerCrudHandler playerCrudHandler = new PlayerCrudHandler();
        PlayersCrudHandler playersCrudHandler = new PlayersCrudHandler();
        RoomCrudHandler roomCrudHandler = new RoomCrudHandler();
        Javalin app = Javalin.create().start(7070);
        app.routes(() -> {
           path("room", () -> {
               //get all rooms
                get(ctx -> {
                    ctx.json(roomCrudHandler.getRooms());
                });
               //Create a room
                post(ctx -> {
                    ctx.json(
                            roomCrudHandler.createRoom(ctx.queryParam("creatorUsername"), ctx.header("Session-Id"))
                    );
                });
                path("{roomId}", () -> {
                    //getRoomById
                    get(ctx -> {
                        ctx.json(
                                roomCrudHandler.getRoomById(ctx.pathParam("roomId"))
                        );
                    });
                    //Join a room
                    post("join/{username}", ctx -> {
                        ctx.json(
                                roomCrudHandler.joinRoom(ctx.pathParam("roomId"), ctx.pathParam("username"), ctx.header("Session-Id"))
                        );
                    });
                    //Leave a room
                    post("leave/{username}", ctx -> {
                        ctx.json(
                                roomCrudHandler.leaveRoom(ctx.pathParam("roomId"), ctx.pathParam("username"), ctx.header("Session-Id"))
                        );
                    });
                   //Delete a room
                   delete("delete/{username}", ctx -> {
                       ctx.json(
                               roomCrudHandler.deleteRoomById(ctx.pathParam("roomId"), ctx.pathParam("username"), ctx.header("Session-Id"))
                       );
                   });
                    //start a room
                    post("start/{username}", ctx -> {
                        ctx.json(
                                roomCrudHandler.startRoom(ctx.pathParam("roomId"), ctx.pathParam("username"), ctx.header("Session-Id"))
                        );
                    });
                });
           });

           path("players", () -> {
               //Get all players
              get(ctx -> {
                    ctx.json(
                            playersCrudHandler.getPlayers()
                    );
              });
           });

           path("player", () -> {
               //create player
                post(ctx -> {
                    ctx.result(
                            playerCrudHandler.createPlayer(ctx.bodyAsClass(Player.class))
                    );
                });

                path("{username}", () -> {
                    //Get player by username
                    get(ctx -> {
                        ctx.json(
                                playerCrudHandler.getPlayerByUsername(ctx.pathParam("username"))
                        );
                    });
                    //Update a player
                    put(ctx -> {
                        ctx.json(
                                playerCrudHandler.updatePlayer(ctx.pathParam("username"), ctx.bodyAsClass(Player.class))
                        );
                    });
                    //Get the room the player is currently in
                    get("room", ctx -> {
                        playerCrudHandler.findRoomByUsername(ctx.pathParam("username"), ctx.header("Session-Id"));
                    });
                });
                //Login a player
                get("login", ctx -> {
                    ctx.result(
                            playerCrudHandler.loginPlayer(ctx.queryParam("username"), ctx.queryParam("password"))
                    );
                });
                //Logout a player
                get("logout", ctx -> {
                    playerCrudHandler.logoutPlayer(ctx.header("Session-Id"));
               });
            });
        });
    }
}
