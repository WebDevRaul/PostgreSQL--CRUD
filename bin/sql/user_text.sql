CREATE TABLE user_text_table (
  id               UUID DEFAULT uuid_generate_v1() PRIMARY KEY UNIQUE NOT NULL,
  account_id       UUID DEFAULT uuid_generate_v1() REFERENCES account(id),
  user_text        TEXT NOT NULL
);