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
import java.util.Base64;

public class RSAKeys {

    public static RSAPrivateKey getRSAPrivateKey(String fileLoc) throws NoSuchAlgorithmException, InvalidKeySpecException {
        final byte[] bytes = getFileBytes(fileLoc, "PRIVATE");
        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(bytes);
        KeyFactory kf = KeyFactory.getInstance("RSA");
        return (RSAPrivateKey) kf
                .generatePrivate(keySpec);
    }

    public static RSAPublicKey getRSAPublicKey(String fileLoc) throws NoSuchAlgorithmException, InvalidKeySpecException {
        final byte[] bytes = getFileBytes(fileLoc, "PUBLIC");
        X509EncodedKeySpec keySpec = new X509EncodedKeySpec (bytes);
        KeyFactory kf = KeyFactory.getInstance("RSA");
        return (RSAPublicKey) kf
                .generatePublic(keySpec);
    }

    private static byte[] getFileBytes(String fileLoc, String key) {
        byte[] fileBytes;
        System.out.println(fileLoc);
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


}
