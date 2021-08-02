const route = require("express").Router();

const industry = (db) => {
  // Default GET request for all data in table
  route.get("/", (req, res) => {
    db.query(
      `
        SELECT * FROM industry;
      `
    ).then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.json(error.message);
    });
  });

  // id GET request for industry name
  route.get("/:id", (req, res) => {
    const industry_id = req.params.id;
    db.query(
      `
        SELECT * FROM industry WHERE id = $1;
      `,
      [industry_id]
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

module.exports = industry;