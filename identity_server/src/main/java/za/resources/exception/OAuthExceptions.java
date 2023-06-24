package za.resources.exception;

import za.resources.models.Result;

public class OAuthExceptions extends Exception {

    private final Result reason;
    private final int status;
    private Throwable cause;

    public OAuthExceptions(Result reason, int status) {
        this.reason = reason;
        this.status = status;
    }

    public OAuthExceptions(Result message, int status, Throwable reason) {
        this.reason = message;
        this.status = status;
        this.cause = reason;
    }

    public Result getReason() {
        return reason;
    }

    public int getStatus() {
        return status;
    }

    public Throwable getCause() {
        return cause;
    }
}
