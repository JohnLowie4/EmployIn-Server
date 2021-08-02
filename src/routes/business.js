const route = require("express").Router();

const business = (db) => {
  // Default GET request for all data in table
  route.get("/", (req, res) => {
    db.query(
      `
        SELECT * FROM business;
      `
    )
      .then((response) => {
        res.json(response.rows);
      })
      .catch((error) => {
        res.json(error.message);
      });
  });

  // id GET request for all business
  route.get("/:id", (req, res) => {
    const business_id = req.params.id;
    db.query(
      `
        SELECT * FROM business WHERE id = $1;
      `,
      [business_id]
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

module.exports = business;
