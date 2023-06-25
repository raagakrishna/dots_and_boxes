package za.resources.util.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;

public class Verifier {
    public static JWTVerifier getVerifier(Algorithm algorithm) {
        return JWT.require(algorithm).build();
    }
}
