package za.resources.cryptography;

import java.io.FileInputStream;
import java.io.IOException;
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

public class RSAKeys {

    public static RSAPrivateKey getRSAPrivateKey(String fileLoc) throws NoSuchAlgorithmException, InvalidKeySpecException {
        final byte[] bytes = getFileBytes(fileLoc);
        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(bytes);
        KeyFactory kf = KeyFactory.getInstance("RSA");
        return (RSAPrivateKey) kf
                .generatePrivate(keySpec);
    }

    public static RSAPublicKey getRSAPublicKey(String fileLoc) throws NoSuchAlgorithmException, InvalidKeySpecException {
        final byte[] bytes = getFileBytes(fileLoc);
        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(bytes);
        KeyFactory kf = KeyFactory.getInstance("RSA");
        return (RSAPublicKey) kf
                .generatePublic(keySpec);
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
