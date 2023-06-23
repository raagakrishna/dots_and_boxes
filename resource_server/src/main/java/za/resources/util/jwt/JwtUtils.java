package za.resources.util.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import za.resources.environment.EnvironmentVariables;
import za.resources.exception.InvalidTokenException;
import za.resources.models.JWTResponse;
import za.resources.models.User;

import java.time.Instant;

public class JwtUtils {

    private final JWTVerifier tokenVerifier;
    private final JWTVerifier refreshTokenVerifier;
    private final Algorithm tokenAlgorithm;
    private final Algorithm refreshTokenAlgorithm;


    public JwtUtils() {
        tokenAlgorithm = Algo.getAlgorithm();
        refreshTokenAlgorithm = Algo.getAlgorithm();
        tokenVerifier = JWT.require(tokenAlgorithm)
                .withIssuer("us")
                .build();
        refreshTokenVerifier = JWT.require(refreshTokenAlgorithm)
                .withIssuer("us")
                .build();
    }

    public JWTResponse generateToken(User user) {

        return new JWTResponse(generateToken(user.userName(), tokenAlgorithm, 300),
                generateToken(user.userName(), tokenAlgorithm, 30000));
    }

    public JWTResponse generateToken(String username) {
        return generateToken(new User(username));
    }

    private String generateToken(String username, Algorithm algorithm, long expireTime) {
        return JWT.create()
                .withExpiresAt(Instant.now().plusSeconds(expireTime))
                .withClaim("username", username)
                .withIssuer(EnvironmentVariables.issuer)
                .withAudience(EnvironmentVariables.audience)
                .sign(algorithm);
    }

    public JWTResponse generateRefreshedToken(String token, String refreshToken) throws InvalidTokenException {
        final DecodedJWT decodedRefreshJWT;
        try {
            decodedRefreshJWT = refreshTokenVerifier.verify(refreshToken);
        } catch (JWTVerificationException verificationException) {
            System.out.println("HERE");
            throw new InvalidTokenException();
        }
        String username = decodedRefreshJWT.getClaim("username").asString();
        String issuer = decodedRefreshJWT.getIssuer();
        String tokenUsername = getUsernameFromToken(token);
        if (tokenUsername != null && tokenUsername.equals(username) && "us".equals(issuer)) {
            return generateToken(username);
        }
        throw new InvalidTokenException();
    }

    public String getUsernameFromToken(String token) throws InvalidTokenException {
        final DecodedJWT decodedJWT;
        try {
            decodedJWT = tokenVerifier.verify(token);
        } catch (JWTVerificationException verificationException) {
            throw new InvalidTokenException();
        }
        Claim username = decodedJWT.getClaim("username");
        return username.asString();
    }


}
