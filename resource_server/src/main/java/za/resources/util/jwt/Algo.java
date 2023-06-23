package za.resources.util.jwt;

import com.auth0.jwt.algorithms.Algorithm;

public class Algo {
    public static Algorithm getAlgorithm() {
        return getAlgorithm("Hold");
    }

    public static Algorithm getAlgorithm(String key) {
        return Algorithm.HMAC256(key);
    }
}
