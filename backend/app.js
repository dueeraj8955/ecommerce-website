const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error")

app.use(express.json())
//Route imports
const product= require("./routes/productroute");
const user = require("./routes/userRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);

// middleware for error
app.use(errorMiddleware);


module.exports = app

