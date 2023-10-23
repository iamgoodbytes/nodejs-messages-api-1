const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: [true, "Message is required"],
    },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
