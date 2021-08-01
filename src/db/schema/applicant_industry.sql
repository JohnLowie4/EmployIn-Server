-- DROP TABLE IF EXISTS applicant_industry CASCADE;

-- CREATE TABLE applicant_industry (
--   id SERIAL PRIMARY KEY NOT NULL,
--   industry_id INTEGER REFERENCES industry(id) ON DELETE CASCADE,
--   job_application_id INTEGER REFERENCES job_applications(id) ON DELETE CASCADE
--   industry_id INTEGER REFERENCES industry(id) ON DELETE CASCADE,
-- );




INSERT INTO applicant_industry (industry_id, job_application_id,applicant_id )
VALUES (1,1,1),
(2,2,2);
