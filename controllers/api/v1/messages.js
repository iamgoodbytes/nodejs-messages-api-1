// require Message model
const Message = require("../../../models/Message");

const index = async (req, res) => {
    let data = await Message.find();
    res.json({
        status: "success",
        message: "GET messages",
        data: data,
    });
};

const create = async (req, res) => {
    let data = {
        message: req.body.message,
    };

    try {
        let message = new Message();
        message.message = data.message;
        await message.save();

        res.json({
            status: "success",
            message: `POST message with id: ${message._id}`,
            data: message,
        });
    } catch (err) {
        res.json({
            status: "error",
            message: err,
        });
        return;
    }
};

module.exports = {
    index,
    create,
};
