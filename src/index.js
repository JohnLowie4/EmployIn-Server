require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8001;
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.json());

db.connect();

app.get("/", (req, res) => {
  res.send("Hello Server");
});

/**
 * Require table routes
 */

/**
 * app.use all the routes
 */

app.listen(PORT, () => {
  console.log(`EmployIn Server listening on port ${PORT}`);
});
