const route = require("express").Router();

const job_posting = (db) => {
  route.get("/", (req, res) => {
    db.query(
      `
        SELECT * FROM job_posting;
      `
    ).then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.json(error.message);
    });
  });
  return route;
};

module.exports = job_posting;