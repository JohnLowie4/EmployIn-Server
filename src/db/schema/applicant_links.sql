-- DROP TABLE IF EXISTS applicant_links CASCADE;

-- CREATE TABLE applicant_links(
--   id SERIAL PRIMARY KEY NOT NULL,
--   applicant_id INTEGER REFERENCES applicant(id) ON DELETE CASCADE,
--   web_link VARCHAR(255) NOT NULL,
-- );

INSERT INTO applicant_links ( applicant_id, web_link )
VALUES (1,'someoting.come'),
(2,'someothing not .come');
