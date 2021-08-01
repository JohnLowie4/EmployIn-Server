// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 7000;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


// \du to see super user
// const userRoutes = require('./userRoutes');


// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./src/lib/db');
const db = new Pool(dbParams);
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/jungle", (req, res) => {

  res.status(200).send({ app: "Employin", date: new Date() })
});



app.get("/", (req, res) => {
  db.query(`SELECT * FROM applicant;`)
    .then(data => {
      const users = data.rows;
      res.json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

app.get("/ssss", (req, res) => {
  db.query(`SELECT * FROM business;`)
    .then(data => {
      const users = data.rows;
      res.json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});







app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});