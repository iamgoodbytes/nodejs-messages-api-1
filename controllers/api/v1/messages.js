// require Message model
const Message = require("../../../models/Message");

const index = async (req, res) => {
    //let data = await Message.find();
    let data = {
        message: "GET messages",
        status: "success",
        messages: [
            {
                message: "Hello World",
            },
            {
                message: "Hello World",
            },
        ],
    };
    res.status(200).json({
        status: "success",
        message: "GET messages",
        data: data,
    });
};

const create = async (req, res) => {
    let data = {
        text: req.body.message.text,
        user: req.body.message.user,
    };

    try {
        let message = new Message();
        message.text = data.text;
        message.user = data.user;
        //await message.save();

        res.json({
            status: "success",
            message: `POST message with id: ${message._id}`,
            data: {
                message: {
                    user: data.user,
                    text: message.text,
                },
            },
        });
    } catch (err) {
        res.json({
            status: "error",
            message: err,
        });
        return;
    }
};

// add function to return one message by :id
const show = async (req, res) => {
    let id = req.params.id;

    // if ID Is missing return 404
    if (!id) {
        res.status(404).json({
            status: "error",
            message: "ID is required",
        });
        return;
    }

    let data = {
        message: "GET message by id " + id,
        status: "success",
        data: {
            message: {
                id: id,
                text: "Hello World",
            },
        },
    };
    res.status(200).json({
        status: "success",
        message: "GET message by id",
        data: data,
    });
};

module.exports = {
    index,
    create,
    show,
};
