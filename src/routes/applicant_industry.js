const route = require("express").Router();

const applicant_industry = (db) => {
  // Default GET request for all data in table
  route.get("/", (req, res) => {
    db.query(
      `
        SELECT * FROM applicant_industry;
      `
    )
      .then((response) => {
        res.json(response.rows);
      })
      .catch((error) => {
        res.json(error.message);
      });
  });

  // id GET request for all applicant_industry
  route.get("/:id", (req, res) => {
    const applicant_industry_id = req.params.id;
    db.query(
      `
        SELECT * FROM applicant_industry WHERE id = $1;
      `,
      [applicant_industry_id]
    )
      .then((response) => {
        res.json(response.rows[0]);
      })
      .catch((error) => {
        res.json(error.message);
      });
  });

  /**
   * Future requests will be added here as the project progresses
   */

  return route;
};

module.exports = applicant_industry;
