CREATE TABLE item (
  id             UUID DEFAULT uuid_generate_v1() PRIMARY KEY UNIQUE NOT NULL,
  "accountId"    UUID DEFAULT uuid_generate_v1(),
  item           CHARACTER(128) NOT NULL,
  FOREIGN KEY ("accountId") REFERENCES account(id)
);