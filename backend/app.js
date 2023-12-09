require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const con = require("./config/db");
con;

const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({ credential: true, origin: `http://localhost:${port}` }));

const router = require("./routes/Router");
app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}`));
