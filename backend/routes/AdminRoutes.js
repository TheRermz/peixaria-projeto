const express = require("express");
const router = express.Router();

//controller
const { registerNewAdmin } = require("../controller/AdminController");

//middlewares
const validate = require("../middlewares/handleValidation");
const { adminValidation } = require("../middlewares/adminValidation");

//routes
router.post("/add", adminValidation(), validate, registerNewAdmin);

module.exports = router;
