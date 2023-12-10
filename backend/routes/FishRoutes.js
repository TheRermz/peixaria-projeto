const express = require("express");
const router = express.Router();

//controller
const { createFish, getAllFishes } = require("../controller/FishController");

//middlewares
const validate = require("../middlewares/handleValidation");
const {
    fishValidation,
    fishUpdateValidation,
} = require("../middlewares/fishValidation");
const authGuard = require("../middlewares/authGuard");

//routes

router.post("/add", authGuard, fishValidation(), validate, createFish);
router.get("/", getAllFishes);

module.exports = router;
