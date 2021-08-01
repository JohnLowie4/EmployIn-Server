DROP TABLE IF EXISTS job_posting CASCADE;

CREATE TABLE job_posting (
  id SERIAL PRIMARY KEY NOT NULL,
  position VARCHAR(255) NOT NULL,
  job_description VARCHAR(255) NOT NULL,
  business_id INTEGER REFERENCES business(id) ON DELETE CASCADE,
  industry_id INTEGER REFERENCES industry(id) ON DELETE CASCADE
);

