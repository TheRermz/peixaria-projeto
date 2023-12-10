const express = require("express");
const router = express.Router();

//routes
router.use("/api/fish", require("./FishRoutes"));
router.use("/api/admin", require("./AdminRoutes"));

// test route
router.get("/", (req, res) => {
    res.send("Teste");
});

module.exports = router;
