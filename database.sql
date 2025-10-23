CREATE DATABASE user_form_db;
USE user_form_db;

CREATE TABLE user_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone_number CHAR(10) NOT NULL,
  eircode CHAR(6) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM user_data;
