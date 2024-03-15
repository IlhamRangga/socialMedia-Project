class BaseError extends Error {
    constructor(statusCode, message) {
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this)
    }
}

export default BaseError