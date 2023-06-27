package za.resources.validation;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.javalin.http.Context;
import org.eclipse.jetty.util.StringUtil;
import za.resources.exception.EmailValidationException;
import za.resources.exception.InvalidUsernameException;
import za.resources.exception.WeakPasswordException;
import za.resources.models.Email;
import za.resources.models.Password;
import za.resources.models.Username;

import java.util.Optional;
import java.util.regex.Pattern;

public class Validation {

    private static final Pattern emailRegex = Pattern.compile("^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$");
    private static final Pattern strongPasswordRegex = Pattern.compile("^(?:(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\\1{2,})[A-Za-z0-9!~<>,;:_=?*+#.\"&§%°()\\|\\[\\]\\-\\$\\^\\@\\/]{12,128}$");
    private static final Pattern usernamePattern = Pattern.compile("\\S+");

    public static void usernameValidation(Context context) throws InvalidUsernameException {
        Optional<String> username = Optional.ofNullable(context.formParam("username"));
        Optional<String> jsonUsername = Optional.ofNullable(context.bodyAsClass(Username.class).getUsername());
        if (username.map(name -> !usernamePattern.matcher(name).matches()).orElse(true)
                && jsonUsername.map(name -> !usernamePattern.matcher(name).matches()).orElse(true)) {
            throw new InvalidUsernameException();
        }
    }

    public static void emailValidation(Context context) throws EmailValidationException {
        Optional<String> email = Optional.ofNullable(context.formParam("email"));
        Optional<String> jsonEmail = Optional.ofNullable(context.bodyAsClass(Email.class).getEmail());
        if (email.map(e -> !emailRegex.matcher(e).matches()).orElse(true)
                && jsonEmail.map(e -> !emailRegex.matcher(e).matches()).orElse(true)) {
            throw new EmailValidationException();
        }
    }

    public static void passwordValidation(Context context) throws WeakPasswordException {
        Optional<String> password = Optional.ofNullable(context.formParam("password"));
        Optional<String> jsonPassword = Optional.ofNullable(context.bodyAsClass(Password.class).getPassword());
        if (password.map(pass -> !strongPasswordRegex.matcher(pass).matches()).orElse(true)
                && jsonPassword.map(pass -> !strongPasswordRegex.matcher(pass).matches()).orElse(true)) {
            throw new WeakPasswordException();
        }
    }


}
