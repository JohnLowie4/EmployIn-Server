const route = require("express").Router();

const business = (db) => {
  route.get("/", (req, res) => {
    db.query(
      `
        SELECT * FROM business;
      `
    ).then((response) => {
      res.json(response.rows);
    }).catch((error) => {
      res.json(error.message);
    });
  });
  return route;
};

module.exports = business;