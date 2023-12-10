const express = require("express");
const router = express.Router();

//controller
const {
    registerNewAdmin,
    loginAdmin,
    getCurrentAdmin,
    updateAdmin,
    getAdminById,
} = require("../controller/AdminController");

//middlewares
const validate = require("../middlewares/handleValidation");
const {
    adminValidation,
    loginValidation,
    adminUpdateValidation,
} = require("../middlewares/adminValidation");
const authGuard = require("../middlewares/authGuard");

//routes
router.post("/register", adminValidation(), validate, registerNewAdmin); //register new admin
router.post("/login", loginValidation(), validate, loginAdmin); //admin login
router.get("/profile", authGuard, getCurrentAdmin); //get current admin
router.put("/", authGuard, adminUpdateValidation(), validate, updateAdmin); //update admin (name, password
router.get("/:id", getAdminById); //get admin by id

module.exports = router;
