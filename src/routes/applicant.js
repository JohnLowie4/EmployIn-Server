const route = require("express").Router();

const applicant = (db) => {
  // Default GET request for all data in table
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

  // id GET request for applicant info
  route.get("/:id", (req, res) => {
    const applicant_id = req.params.id;
    db.query(
      `
        SELECT * FROM applicant WHERE id = $1;
      `,
      [applicant_id]
    ).then((response) => {
      res.json(response.rows[0]);
    }).catch((error) => {
      res.json(error.message);
    });
  });

  /**
   * Future requests will be added here as the project progresses
   */

  return route;
};

module.exports = applicant;