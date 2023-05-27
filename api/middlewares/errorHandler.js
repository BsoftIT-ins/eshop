// Error Handle Middleware
export const errorHandle = (req, res, next) =>{
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Unknown Error";
    return res.status(errorStatus).json({
        name: error.name,
        message: errorMessage,
        status: errorStatus,
        stack: error.stack,
    });
};