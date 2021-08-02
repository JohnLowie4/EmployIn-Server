const route = require("express").Router();

const applicant = (db) => {
  route.get("/", (req, res) => {
    db.query(
      `
        SELECT * FROM applicant;
      `
    ).then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.json(error.message);
    });
  });
  return route;
};

module.exports = applicant;