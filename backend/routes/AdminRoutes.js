const express = require("express");
const router = express.Router();

//controller
const {
    registerNewAdmin,
    loginAdmin,
} = require("../controller/AdminController");

//middlewares
const validate = require("../middlewares/handleValidation");
const {
    adminValidation,
    loginValidation,
} = require("../middlewares/adminValidation");

//routes
router.post("/register", adminValidation(), validate, registerNewAdmin); //register new admin
router.post("/login", loginValidation(), validate, loginAdmin); //admin login

module.exports = router;
