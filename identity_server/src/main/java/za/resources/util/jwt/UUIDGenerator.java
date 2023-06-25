package za.resources.util.jwt;
import java.util.UUID;
public class UUIDGenerator {

    protected static String generateUUID() {
        UUID uuid = UUID.randomUUID();
        return uuid.toString();
    }

}
