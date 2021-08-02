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

app.use(bodyParser.urlencoded({ extended: true }));

// adding Helmet to enhance your API's security
app.use(helmet());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.use(express.json());

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./src/lib/db');
const db = new Pool(dbParams);

// Connect to database
db.connect();

app.get("/", (req, res) => {
  res.send("That is not a proper API request route");
});

const applicant_industry = require("./src/routes/applicant_industry");
const applicant_links = require("./src/routes/applicant_links");
const applicant = require("./src/routes/applicant");
const business = require("./src/routes/business");
const industry = require("./src/routes/industry");
const job_application = require("./src/routes/job_applications");
const job_posting = require("./src/routes/job_posting");

app.use("/api/applicant_industry", applicant_industry(db));
app.use("/api/applicant_links", applicant_links(db))
app.use("/api/applicant", applicant(db));
app.use("/api/business", business(db));
app.use("/api/industry", industry(db));
app.use("/api/job_application", job_application(db));
app.use("/api/job_posting", job_posting(db))

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});