package za.dots.controllers;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Arrays;
import java.util.Base64;
import java.util.stream.Collectors;

public class BackendJWTVerify {
    private final JWTVerifier verifier;

    public static boolean validate(String jwt) throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
        String token = jwt.split(" ").length == 2 ? jwt.split(" ")[1] : "";
        RSAPublicKey publicKey = getRSAPublicKey(System.getenv("publicKey"));
        Algorithm algorithm = Algorithm.RSA512(publicKey);
        JWTVerifier verifier = JWT.require(algorithm)
                .withIssuer(System.getenv("issuer"))
                .withAudience(System.getenv("audience"))
                .build();
        try {
            verifier.verify(token);
            return true;
        } catch (JWTVerificationException jwtVerificationException) {
            return false;
        }
    }

    BackendJWTVerify() throws NoSuchAlgorithmException, InvalidKeySpecException {
        RSAPrivateKey privateKey = getRSAPrivateKey(System.getenv("privateKey"));
        RSAPublicKey publicKey = getRSAPublicKey(System.getenv("publicKey"));
        Algorithm algorithm = Algorithm.RSA512(publicKey, privateKey);
        this.verifier = JWT.require(algorithm).build();
    }

    public DecodedJWT isJwtValid(String token) throws JWTVerificationException {
        return this.verifier.verify(token);
    }

    private RSAPrivateKey getRSAPrivateKey(String fileLoc) throws NoSuchAlgorithmException, InvalidKeySpecException {
        final byte[] bytes = getFileBytes(fileLoc, "PRIVATE");
        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(bytes);
        KeyFactory kf = KeyFactory.getInstance("RSA");
        return (RSAPrivateKey) kf
                .generatePrivate(keySpec);
    }

    private static RSAPublicKey getRSAPublicKey(String fileLoc) throws NoSuchAlgorithmException, InvalidKeySpecException {
        final byte[] bytes = getFileBytes(fileLoc);
        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(bytes);
        KeyFactory kf = KeyFactory.getInstance("RSA");
        return (RSAPublicKey) kf
                .generatePublic(keySpec);
    }

    private static byte[] getFileBytes(String fileLoc, String key) {
        byte[] fileBytes;
        try (FileInputStream fis = new FileInputStream(fileLoc)) {
            fileBytes = Base64.getDecoder().decode(new String(fis.readAllBytes())
                    .replaceAll("\\n", "")
                    .replaceAll("-----BEGIN " + key + " KEY-----", "")
                    .replaceAll("-----END " + key + " KEY-----", "")
                    .trim()
                    .getBytes());
        } catch (IOException e) {
            fileBytes = new byte[0];
        }
        return fileBytes;
    }

    private static byte[] getFileBytes(String fileLoc) {
        byte[] fileBytes;
        try (FileInputStream fis = new FileInputStream(fileLoc)) {
            String key = new String(fis.readAllBytes());
            key = Arrays.stream(key.split("(\n|\r)")).filter(str -> !str.contains("KEY")).collect(Collectors.joining());
            fileBytes = Base64.getDecoder().decode(key
                    .getBytes());
        } catch (IOException e) {
            fileBytes = new byte[0];
        }
        return fileBytes;
    }
}

