package za.dots.common;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class ResourceAccessValidate {
    public static boolean validate(String jwt, Algorithm algorithm) throws IOException {
        File publicKeyFile = new File(System.getenv(""));
        byte[] publicKeyBytes = Files.readAllBytes(publicKeyFile.toPath());
        JWTVerifier verifier = JWT.require(algorithm)
                .withIssuer(System.getenv(""))
                .build();
        try {
            verifier.verify(jwt);
            return true;
        } catch (JWTVerificationException jwtVerificationException) {
            return false;
        }
    }
}