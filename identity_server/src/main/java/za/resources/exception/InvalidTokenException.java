package za.resources.exception;

public class InvalidTokenException extends ValidationException {

    public InvalidTokenException() {
        super("One of the tokens was invalid");
    }

}
