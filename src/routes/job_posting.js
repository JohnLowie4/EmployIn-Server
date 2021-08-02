const route = require("express").Router();

const job_posting = (db) => {
  // Default GET request for all data in table
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

  // id GET request for job_posting infor
  route.get("/:id", (req, res) => {
    const job_posting_id = req.params.id;
    db.query(
      `
        SELECT * FROM job_posting WHERE id = $1;
      `,
      [job_posting_id]
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

module.exports = job_posting;