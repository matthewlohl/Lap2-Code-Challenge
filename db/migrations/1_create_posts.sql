DROP TABLE IF EXISTS posts;

CREATE TABLE dog(
    id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    author varchar(100) NOT NULL,
    body varchar (500) NOT NULL
)