const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

const mongoose = require("mongoose");

// log current environment
mongoose.connect("mongodb://127.0.0.1:27017/todov1");

// get DBCONN from .env
const dbConn = process.env.DBCONN;
console.log(dbConn);

// require the routes
const messagesRouter = require("./routes/api/v1/messages");

// json body parser
app.use(express.json());
app.use("/api/v1/messages", messagesRouter);

app.listen(port, () => {
    console.log(`Example app listening on a port ${port}`);
});
