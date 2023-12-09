const express = require("express");
const router = express.Router();

//controller
const { createFish } = require("../controller/FishController");

//middlewares
const validate = require("../middlewares/handleValidation");
const { fishValidation } = require("../middlewares/fishValidation");

//routes

router.post("/add", fishValidation(), validate, createFish);

module.exports = router;
