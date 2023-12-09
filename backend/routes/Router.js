const express = require("express");
const router = express.Router();

//routes
router.use("/api/fish", require("./FishRoutes"));

// test route
router.get("/", (req, res) => {
    res.send("Minhoca");
});

module.exports = router;
