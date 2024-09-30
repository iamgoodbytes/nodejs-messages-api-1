const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Message is required"],
    },
    user: {
        type: String,
        required: [true, "User is required"],
    },
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
