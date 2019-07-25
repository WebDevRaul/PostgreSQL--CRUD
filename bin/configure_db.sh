#!/bin/bash

# Import Credentials (export foo=bar)
. ./credentials.sh

echo 'Configuring dragonstackdb';

# DROP TABLE account
psql $credentials < ./sql/reset_account.sql
psql $credentials < ./sql/reset_item.sql

# CREATE TABLE
psql $credentials < ./sql/account.sql
psql $credentials < ./sql/item.sql

echo 'dragonstackdb configured'