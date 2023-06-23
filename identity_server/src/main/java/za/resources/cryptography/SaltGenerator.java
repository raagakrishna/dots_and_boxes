package za.resources.cryptography;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

public class SaltGenerator {

    private static final List<String> characters;

    static {
        characters = new ArrayList<>();
        characters.addAll(IntStream.range('0', '9').mapToObj(String::valueOf).toList());
        characters.addAll(IntStream.range('a', 'z').mapToObj(String::valueOf).toList());
        characters.addAll(IntStream.range('A', 'Z').mapToObj(String::valueOf).toList());
    }

    public static String generateSalt() {
        return "6" + IntStream.range(1, 16).mapToObj(i -> characters.get((int) Math.floor(Math.random() * characters.size()))).reduce("", (a, b) -> a + b);
    }


}
