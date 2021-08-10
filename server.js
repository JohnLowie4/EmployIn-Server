// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 7001;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

// adding Helmet to enhance your API's security
app.use(helmet());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

app.use(express.json());

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./src/lib/db");
const db = new Pool(dbParams);

// Connect to database
db.connect();

app.get("/", (req, res) => {
  res.send(
    "EmployIn-Server is running. Please refer to the README.md for accessing correct routes."
  );
});

// Require all database routes
const applicant_industry = require("./src/routes/applicant_industry");
const applicant_links = require("./src/routes/applicant_links");
const applicant = require("./src/routes/applicant");
const business = require("./src/routes/business");
const industry = require("./src/routes/industry");
const job_application = require("./src/routes/job_applications");
const job_posting = require("./src/routes/job_posting");

// Use routes to access the data
app.use("/api/applicant_industry", applicant_industry(db));
app.use("/api/applicant_links", applicant_links(db));
app.use("/api/applicant", applicant(db));
app.use("/api/business", business(db));
app.use("/api/industry", industry(db));
app.use("/api/job_application", job_application(db));
app.use("/api/job_posting", job_posting(db));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
