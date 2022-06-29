const ErrorHander = require("../utils/errorhander")

module.exports = (err,req,res,next)=>{
    err.massage = err.massage || "Internal Server Error";

    err.statusCode = err.statusCode || 500;
    
    res.status(err.statusCode).json({
        success:false,
        massage: err.massage,
    });
};