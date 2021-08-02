const route = require("express").Router();

const applicant_links = (db) => {
  route.get("/", (req, res) => {
    db.query(
      `
        SELECT * FROM applicant_links;
      `
    ).then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.json(error.message);
    });
  });
  return route;
};

module.exports = applicant_links;