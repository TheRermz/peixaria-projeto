const express = require("express");
const router = express.Router();

//controller
const {
    registerNewAdmin,
    loginAdmin,
    getCurrentAdmin,
} = require("../controller/AdminController");

//middlewares
const validate = require("../middlewares/handleValidation");
const {
    adminValidation,
    loginValidation,
} = require("../middlewares/adminValidation");
const authGuard = require("../middlewares/authGuard");

//routes
router.post("/register", adminValidation(), validate, registerNewAdmin); //register new admin
router.post("/login", loginValidation(), validate, loginAdmin); //admin login
router.get("/profile", authGuard, getCurrentAdmin); //get current admin

module.exports = router;
