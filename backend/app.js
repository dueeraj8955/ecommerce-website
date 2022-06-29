const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error")

app.use(express.json())
//Route imports
const product= require("./routes/productroute");

app.use("/api/v1",product);

// middleware for error
app.use(errorMiddleware);


module.exports = app

