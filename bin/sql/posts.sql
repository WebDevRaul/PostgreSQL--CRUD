CREATE TABLE posts (
  id               UUID DEFAULT uuid_generate_v1() PRIMARY KEY UNIQUE NOT NULL,
  account_id       UUID DEFAULT uuid_generate_v1() REFERENCES account(id),
  post             TEXT NOT NULL
);