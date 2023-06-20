package za.resources;

import com.auth0.jwt.interfaces.DecodedJWT;
import io.javalin.*;
import javalinjwt.*;
import za.resources.models.JWTResponse;
import za.resources.models.User;

import java.util.Optional;

public class App
{
    public static void main( String[] args )
    {
//        JWTProvider<Object> provider = new JWTProvider<>(algorithm, generator, verifier);
//        Javalin app = Javalin.create().start(7071);
//        app.get("/generate",  context -> {
//            // a mock user as an examples
//            User mockUser = new User();
//
//            // generate a token for the user
//            String token = provider.generateToken(mockUser);
//
//            // send the JWT response
//            context.json(new JWTResponse(token));
//        });
//
//        app.get("/validate", context -> {
//            Optional<DecodedJWT> decodedJWT = JavalinJWT.getTokenFromHeader(context).flatMap(provider::validateToken);
//
//            if (!decodedJWT.isPresent()) {
//                context.status(401).result("Missing or invalid token");
//            }
//            else {
//                context.result("Hi " + decodedJWT.get().getClaim("name").asString());
//            }
//        });
    }
}
