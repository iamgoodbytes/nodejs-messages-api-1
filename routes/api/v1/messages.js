// require express
const express = require("express");
// create a new Router
const router = express.Router();
const messagesController = require("../../../controllers/api/v1/messages");

router.get("/", messagesController.index);

router.post("/", messagesController.create);

module.exports = router;
