const Admin = require("../model/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const genToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, {
        expiresIn: "7d",
    });
};

// Register a new admin

const registerNewAdmin = async (req, res) => {
    res.send("registerNewAdmin");
};

module.exports = {
    registerNewAdmin,
};
