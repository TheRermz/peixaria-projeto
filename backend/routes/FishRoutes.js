const express = require("express");
const router = express.Router();

//controller
const {
    createFish,
    getAllFishes,
    getFishById,
    updateFishById,
    deleteFishById,
} = require("../controller/FishController");

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
router.get("/:id", getFishById);
router.put("/:id", authGuard, fishUpdateValidation(), validate, updateFishById);
router.delete("/:id", authGuard, deleteFishById);

module.exports = router;
