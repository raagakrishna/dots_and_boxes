package za.resources.exception;

public class EmailValidationException extends ValidationException {

    public EmailValidationException() {
        super("Invalid email");
    }

}
