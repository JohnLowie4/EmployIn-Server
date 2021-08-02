const route = require("express").Router();

const applicant_links = (db) => {
  // Default GET request for all data in table
  route.get("/", (req, res) => {
    db.query(
      `
        SELECT * FROM applicant_links;
      `
    )
      .then((response) => {
        res.json(response.rows);
      })
      .catch((error) => {
        res.json(error.message);
      });
  });

  // id GET request for all applicant_links by applicant_id
  route.get("/:applicant_id", (req, res) => {
    const applicant_id = req.params.applicant_id;
    db.query(
      `
        SELECT * 
        FROM applicant_links
        WHERE applicant_id = $1;
      `,
      [applicant_id]
    )
      .then((response) => {
        res.json(response.rows);
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

module.exports = applicant_links;
