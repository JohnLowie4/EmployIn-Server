const route = require("express").Router();

const industry = (db) => {
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
  return route;
};

module.exports = industry;