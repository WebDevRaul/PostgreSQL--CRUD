#!/bin/bash

# Import Credentials (export foo=bar)
. ./credentials.sh

echo 'Configuring dragonstackdb';

# DROP TABLE account
psql $credentials < ./sql/reset/reset_account.sql
psql $credentials < ./sql/reset/reset_user_text.sql

# CREATE TABLE
psql $credentials < ./sql/account.sql
psql $credentials < ./sql/user_text.sql

echo 'dragonstackdb configured'