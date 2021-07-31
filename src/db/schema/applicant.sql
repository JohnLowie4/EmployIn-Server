DROP TABLE IF EXISTS applicant CASCADE;

CREATE TABLE applicant(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  summary VARCHAR(255) NOT NULL,
  experience VARCHAR(255) NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  
);