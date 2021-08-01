-- DROP TABLE IF EXISTS applicant CASCADE;

-- CREATE TABLE applicant(
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(255) NOT NULL,
--   phone_number VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   summary VARCHAR(255) NOT NULL,
--   experience VARCHAR(255) NOT NULL,
--   img_url VARCHAR(255) NOT NULL
-- );

INSERT INTO applicant (name, phone_number, email, summary, experience, img_url)
VALUES ('Eva Stanley', '778-349-3299', 'abc@gamil.com','thisis a test', 'junior web', 'https'),
('Eva Stasdsdsdsnley', '778-349-3299', 'abc@gamil.com','thisis a test', 'junior web', 'https');
