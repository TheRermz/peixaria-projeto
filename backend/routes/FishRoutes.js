const express = require("express");
const router = express.Router();

//controller
const { createFish } = require("../controller/FishController");

//middlewares
const validate = require("../middlewares/handleValidation");

//routes

router.post("/add", validate, createFish);

module.exports = router;
