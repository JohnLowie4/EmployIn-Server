-- DROP TABLE IF EXISTS job_posting CASCADE;

-- CREATE TABLE job_posting (
--   id SERIAL PRIMARY KEY NOT NULL,
--   position VARCHAR(255) NOT NULL,
--   job_description VARCHAR(255) NOT NULL,
--   business_id INTEGER REFERENCES business(id) ON DELETE CASCADE,
--   industry_id INTEGER REFERENCES industry(id) ON DELETE CASCADE
-- );



INSERT INTO job_posting( position, job_description, business_id, industry_id )
VALUES ('sJUnior developer','someoting to do with programming', 1, 1),
('sJUniorer','someoting amming', 2, 2);
