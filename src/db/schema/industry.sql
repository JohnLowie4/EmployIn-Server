DROP TABLE IF EXISTS industry CASCADE;

CREATE TABLE industry (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
