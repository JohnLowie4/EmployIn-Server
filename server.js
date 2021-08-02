// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 7000;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// defining an array to work as the database (temporary solution)
// const ads = [{ title: 'Hello, world (again)!' }];

app.use(bodyParser.urlencoded({ extended: true }));

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
// app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// \du to see super user
// const userRoutes = require('./userRoutes');

app.use(express.json());

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./src/lib/db');
const db = new Pool(dbParams);
db.connect();

app.get("/", (req, res) => {
  res.send("Hello World");
});


const industry = require("./src/routes/industry");




app.use("/api/industry", industry(db));





// app.get("/jungle", (req, res) => {

//   res.status(200).send({ app: "Employin", date: new Date() })
// });



// app.get("/", (req, res) => {
//   db.query(`SELECT * from applicant JOIN applicant_links ON applicant.id = applicant_links.applicant_id;`)
//     .then(data => {
//       const users = data.rows;
//       res.json(users);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

// app.get("/ssss", (req, res) => {
//   db.query(`SELECT applicant.name as person, industry.name
//   from applicant
//   JOIN applicant_industry ON applicant.id = applicant_industry.applicant_id
//   JOIN industry ON applicant_industry.industry_id = industry.id`)
//     .then(data => {
//       const users = data.rows;
//       res.json(users);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });







app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});