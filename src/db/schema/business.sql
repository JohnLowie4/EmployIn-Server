-- DROP TABLE IF EXISTS business CASCADE;

-- CREATE TABLE business(
--   id SERIAL PRIMARY KEY NOT NULL,
--   summary VARCHAR(255) NOT NULL,
--   img_url VARCHAR(255) NOT NULL
-- );


INSERT INTO business(summary, img_url)
VALUES ('this business is all about number 78-349-3299', 'https://picsum.photos/200/300'),
('this business is all about FOODS ', 'https://picsum.photos/200/300');
