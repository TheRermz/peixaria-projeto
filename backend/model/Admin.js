const mongoose = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
    },
    { timestamps: true },
);

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
