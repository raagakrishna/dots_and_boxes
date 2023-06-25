package za.resources.exception;

public class InvalidUsernameException extends ValidationException {

    public InvalidUsernameException() {
        super("Invalid username");
    }
}
