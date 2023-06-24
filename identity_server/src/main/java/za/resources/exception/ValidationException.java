package za.resources.exception;

import za.resources.models.Result;

public class ValidationException extends OAuthExceptions {

    public ValidationException(String message) {
        super(new Result(message), 400);
    }

    public ValidationException(Result message) {
        super(message, 400);
    }

    public ValidationException(Result message, Throwable throwable) {
        super(message, 400, throwable);
    }
}
