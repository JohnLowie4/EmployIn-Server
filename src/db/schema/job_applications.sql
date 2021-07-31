DROP TABLE IF EXISTS job_applications CASCADE;

CREATE TABLE job_applications (
  id SERIAL PRIMARY KEY NOT NULL,
  job_posting_id INTEGER REFERENCES job_posting(id) ON DELETE CASCADE,
  
);
