const errorMiddleware  = (error, req, res, next) => {
    
    console.error(`Error in middleware: ${error}`);
    console.log(error)

    res.status(error.statusCode || 500).send({
        error: error.message,
        statusCode: error.statusCode
    })
    next(error)
}

export default errorMiddleware