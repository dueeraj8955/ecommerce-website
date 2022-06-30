const ErrorHander = require("../utils/errorhander");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncError(async(req,res,next)=>{
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHander("Please Login to access this resource", 401));
    }
    const decodeData = jwt.verify(token,process.env.JWT_SECRET);

    req.User = await User.findById(decodeData._id);

    next();
});