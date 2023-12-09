const express = require("express");
const router = express.Router();

//controller
const { createFish } = require("../controller/FishController");

//routes

router.post("/add", createFish);

module.exports = router;
