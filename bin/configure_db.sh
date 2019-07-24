#!/bin/bash

# Import Credentials (export foo=bar)
. ./credentials.sh

echo 'Configuring dragonstackdb';

# DROP TABLE account
psql $credentials < ./sql/reset_database.sql

# CREATE TABLE
psql $credentials < ./sql/account.sql

echo 'dragonstackdb configured'