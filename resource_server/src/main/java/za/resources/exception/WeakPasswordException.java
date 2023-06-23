package za.resources.exception;

public class WeakPasswordException extends ValidationException {

    public WeakPasswordException() {
        super("Password not strong enough");
    }

}
