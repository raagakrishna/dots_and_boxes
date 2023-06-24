package za.resources.util.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import za.resources.database.DatabaseAccess;
import za.resources.environment.EnvironmentVariables;
import za.resources.exception.InvalidTokenException;
import za.resources.models.JWTResponse;
import za.resources.models.User;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.time.Instant;
import java.util.List;

public class JwtUtils {

    private final JWTVerifier tokenVerifier;
    private final JWTVerifier refreshTokenVerifier;
    private final Algorithm tokenAlgorithm;
    private final Algorithm refreshTokenAlgorithm;


    public JwtUtils(RSAPublicKey publicKey, RSAPrivateKey privateKey) {
        tokenAlgorithm = Algo.getAlgorithm(publicKey, privateKey);
        refreshTokenAlgorithm = Algo.getAlgorithm(publicKey, privateKey);
        tokenVerifier = JWT.require(tokenAlgorithm)
                .withIssuer(EnvironmentVariables.issuer)
                .withAudience(EnvironmentVariables.audience)
                .build();
        refreshTokenVerifier = JWT.require(refreshTokenAlgorithm)
                .withIssuer(EnvironmentVariables.issuer)
                .withAudience(EnvironmentVariables.issuer)
                .build();
    }

    public JWTResponse generateToken(User user) {

        return new JWTResponse(generateToken(user.getUsername(), 300),
                generateRefreshToken(user.getUsername(), 86400));
    }

    public JWTResponse generateToken(String username) {
        return generateToken(new User(username));
    }

    private String generateToken(String username, long expireTime) {
        return JWT.create()
                .withExpiresAt(Instant.now().plusSeconds(expireTime))
                .withClaim("username", username)
                .withIssuer(EnvironmentVariables.issuer)
                .withAudience(EnvironmentVariables.audience)
                .sign(tokenAlgorithm);
    }

    private String generateRefreshToken(String username, long expireTime) {
        String uuid = UUIDGenerator.generateUUID();
        DatabaseAccess.insertUUID(username, uuid);
        return JWT.create()
                .withExpiresAt(Instant.now().plusSeconds(expireTime))
                .withClaim("username", username)
                .withIssuer(EnvironmentVariables.issuer)
                .withAudience(EnvironmentVariables.issuer)
                .withClaim("UUID", uuid)
                .sign(refreshTokenAlgorithm);
    }

    public JWTResponse generateRefreshedToken(String token, String refreshToken) throws InvalidTokenException {
        final DecodedJWT decodedRefreshJWT;
        final DecodedJWT decodedJWT;
        try {
            decodedRefreshJWT = refreshTokenVerifier.verify(refreshToken);
            decodedJWT = tokenVerifier.verify(token);

        } catch (JWTVerificationException verificationException) {
            throw new InvalidTokenException();
        }
        return validTokens(decodedJWT, decodedRefreshJWT);
    }

    private JWTResponse validTokens(DecodedJWT token, DecodedJWT refresh) throws InvalidTokenException {
        String tokenUsername = token.getClaim("username").asString();
        String tokenIssuer = token.getIssuer();
        String refreshUsername = refresh.getClaim("username").asString();
        String refreshIssuer = refresh.getIssuer();
        String uuid = refresh.getClaim("UUID").asString();
        List<String> audience = refresh.getAudience();
        boolean validUsername = tokenUsername != null && tokenUsername.equals(refreshUsername);
        boolean validIssuer = EnvironmentVariables.issuer.equals(tokenIssuer) && EnvironmentVariables.issuer.equals(refreshIssuer);
        boolean validAudience = audience.contains(EnvironmentVariables.issuer);
        if (validUsername && validIssuer && validAudience && DatabaseAccess.validateUUID(tokenUsername, uuid)) {
            return generateToken(tokenUsername);
        } else {
            throw new InvalidTokenException();
        }
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
