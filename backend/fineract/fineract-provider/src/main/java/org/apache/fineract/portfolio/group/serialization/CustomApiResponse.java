package org.apache.fineract.portfolio.group.serialization;

public class CustomApiResponse {
    private String status;
    private String message;
    private int statusCode;

    // Constructor
    public CustomApiResponse(String status, String message, int statusCode) {
        this.status = status;
        this.message = message;
        this.statusCode = statusCode;
    }

    // Getters and Setters
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }
}

