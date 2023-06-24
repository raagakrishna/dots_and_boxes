package za.resources.util.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import javalinjwt.JWTGenerator;
import za.resources.models.User;

import java.time.Instant;

public class Generator {
    public static JWTGenerator<User> getGenerator() {
        return (user, alg) -> {
            JWTCreator.Builder token = JWT.create()
                    .withClaim("name", user.getUsername())
                    .withExpiresAt(Instant.now().plusSeconds(300));
            return token.sign(alg);
        };
    }

    public static JWTGenerator<User> getRefreshTokenGenerator() {
        return (user, alg) -> {
            JWTCreator.Builder token = JWT.create()
                    .withClaim("name", user.getUsername())
                    .withExpiresAt(Instant.now().plusSeconds(30000));
            return token.sign(alg);
        };
    }
}
