package za.resources.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Result {

    @JsonProperty("message")
    private final String message;

    public Result(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
