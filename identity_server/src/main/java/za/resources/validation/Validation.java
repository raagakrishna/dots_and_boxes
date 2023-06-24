package za.resources.validation;


import io.javalin.http.Context;
import za.resources.exception.EmailValidationException;
import za.resources.exception.WeakPasswordException;

import java.util.Optional;
import java.util.regex.Pattern;

public class Validation {

    private static final Pattern emailRegex = Pattern.compile("^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$");
    private static final Pattern strongPasswordRegex = Pattern.compile("^(?:(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\\1{2,})[A-Za-z0-9!~<>,;:_=?*+#.\"&§%°()\\|\\[\\]\\-\\$\\^\\@\\/]{12,128}$");
    public static void usernameValidation(Context context) {
//        TODO decide on username context
    }

    public static void emailValidation(Context context) throws EmailValidationException {
        Optional<String> email = Optional.ofNullable(context.formParam("email"));
        if (email.map(e -> !emailRegex.matcher(e).matches()).orElse(true)) {
            throw new EmailValidationException();
        }
    }

    public static void passwordValidation(Context context) throws WeakPasswordException {
        Optional<String> password = Optional.ofNullable(context.formParam("password"));
        if (password.map(pass -> !strongPasswordRegex.matcher(pass).matches()).orElse(true)) {
            throw new WeakPasswordException();
        }
    }

}
