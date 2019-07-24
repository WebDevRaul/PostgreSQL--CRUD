const Pg = require('pg');
const { elephantURI } = require('./config/keys');

const pool = new Pg.Client(elephantURI);


module.exports = pool;