DROP TABLE IF EXISTS applicant CASCADE;
DROP TABLE IF EXISTS business CASCADE;
DROP TABLE IF EXISTS applicant_links CASCADE;
DROP TABLE IF EXISTS industry CASCADE;
DROP TABLE IF EXISTS job_posting CASCADE;
DROP TABLE IF EXISTS job_applications CASCADE;
DROP TABLE IF EXISTS applicant_industry CASCADE;


CREATE TABLE applicant(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  summary VARCHAR(255) NOT NULL,
  experience VARCHAR(255) NOT NULL,
  img_url VARCHAR(255) NOT NULL
);

CREATE TABLE business(
  id SERIAL PRIMARY KEY NOT NULL,
  summary VARCHAR(255) NOT NULL,
  img_url VARCHAR(255) NOT NULL
);

CREATE TABLE applicant_links(
  id SERIAL PRIMARY KEY NOT NULL,
  applicant_id INTEGER REFERENCES applicant(id) ON DELETE CASCADE,
  web_link VARCHAR(255) NOT NULL
);

CREATE TABLE industry (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE job_posting (
  id SERIAL PRIMARY KEY NOT NULL,
  position VARCHAR(255) NOT NULL,
  job_description VARCHAR(255) NOT NULL,
  business_id INTEGER REFERENCES business(id) ON DELETE CASCADE,
  industry_id INTEGER REFERENCES industry(id) ON DELETE CASCADE
);

CREATE TABLE job_applications (
  id SERIAL PRIMARY KEY NOT NULL,
  job_posting_id INTEGER REFERENCES job_posting(id) ON DELETE CASCADE
  
);


CREATE TABLE applicant_industry (
  id SERIAL PRIMARY KEY NOT NULL,
  industry_id INTEGER REFERENCES industry(id) ON DELETE CASCADE,
  job_application_id INTEGER REFERENCES job_applications(id) ON DELETE CASCADE,
  applicant_id INTEGER REFERENCES applicant(id) ON DELETE CASCADE
);


\i src/db/schema/applicant.sql
\i src/db/schema/business.sql
\i src/db/schema/applicant_links.sql
\i src/db/schema/industry.sql
\i src/db/schema/job_posting.sql
\i src/db/schema/job_applications.sql
\i src/db/schema/applicant_industry.sql