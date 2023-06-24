package za.resources.cryptography;

import org.apache.commons.codec.digest.Crypt;

public class PasswordManager {

    public static String hashPassword(String password, String salt) {
        return Crypt.crypt(password, salt);
    }

}
