package za.resources.exception;

public class UsernameValidationException extends ValidationException {

    public UsernameValidationException() {
        super("Invalid username");
    }

}
