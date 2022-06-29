const ErrorHander = require("../utils/errorhander")

module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;

    err.massage = err.massage || "Internal Server Error";
    
    res.status(err.statusCode).json({
        success:false,
        massage: err.massage,
    })
};