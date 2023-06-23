package za.resources.util.jwt;

import com.auth0.jwt.algorithms.Algorithm;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

public class Algo {
    public static Algorithm getAlgorithm(RSAPublicKey publicKey, RSAPrivateKey privateKey) {
        return Algorithm.RSA512(publicKey, privateKey);
    }
}
