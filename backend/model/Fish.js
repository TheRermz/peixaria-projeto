const mongoose = require("mongoose");
const { Schema } = mongoose;

const FishSchema = new Schema(
    {
        name: String,
        price: Number,
        description: String,
        image: String,
        category: String,
        quantity: Number,
    },
    { timestamps: true },
);

const Fish = mongoose.model("Fish", FishSchema);

module.exports = Fish;
