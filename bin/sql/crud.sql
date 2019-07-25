CREATE TABLE crud (
  id                 UUID DEFAULT uuid_generate_v1() PRIMARY KEY UNIQUE NOT NULL,
  "account_email"    VARCHAR(60) REFERENCES account(email),
  word               CHARACTER(128) NOT NULL
);