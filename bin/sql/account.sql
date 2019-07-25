CREATE TABLE account (
  id               UUID DEFAULT uuid_generate_v1() PRIMARY KEY UNIQUE NOT NULL,
  first_name       VARCHAR(255) NOT NULL,
  last_name        VARCHAR(255) NOT NULL,
  email            VARCHAR(60) UNIQUE NOT NULL,
  password         VARCHAR(60) NOT NULL
);