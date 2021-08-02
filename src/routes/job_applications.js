const route = require("express").Router();

const job_applications = (db) => {
  // Default GET request for all data in table
  route.get("/", (req, res) => {
    db.query(
      `
        SELECT * FROM job_applications;
      `
    ).then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.json(error.message);
    });
  });

  /**
   * Future requests will be added here as the project progresses
   */

  return route;
};

module.exports = job_applications;