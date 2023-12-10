const express = require("express");
const router = express.Router();

//controller
const { createFish } = require("../controller/FishController");

//middlewares
const validate = require("../middlewares/handleValidation");
const { fishValidation } = require("../middlewares/fishValidation");
const authGuard = require("../middlewares/authGuard");

//routes

router.post("/add", authGuard, fishValidation(), validate, createFish);

module.exports = router;
