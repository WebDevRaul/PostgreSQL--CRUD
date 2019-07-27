#!/bin/bash

# Import Credentials (export foo=bar)
. ./credentials.sh

echo 'Configuring dragonstackdb';

# DROP TABLE account
psql $credentials < ./sql/reset/reset_account.sql
psql $credentials < ./sql/reset/reset_posts.sql

# CREATE TABLE
psql $credentials < ./sql/account.sql
psql $credentials < ./sql/posts.sql

echo 'dragonstackdb configured'