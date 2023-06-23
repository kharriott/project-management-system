DROP TABLE IF EXISTS users;



CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(150) NOT NULL
);


INSERT INTO users(name, email, password) VALUES ('Kayvia', 'email@email.com', 'password');