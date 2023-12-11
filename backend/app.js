require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const con = require("./config/db");
const path = require("path");
con;

const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ credential: true, origin: `http://localhost:5173` }));

//upload directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const router = require("./routes/Router");
app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}`));
