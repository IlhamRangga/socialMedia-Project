const errorMiddleware  = (error, req, res, next) => {
    
    console.error(`Error in middleware: ${error}`);

    res.status(error.statusCode || 500).json({
        error: error.message,
        statusCode: error.statusCode
    })
    next(error)
}

export default errorMiddleware