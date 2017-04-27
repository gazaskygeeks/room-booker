const config = require('./config.js');
const pg = require('pg');
const pool = new pg.Pool(config);

pool.on('error', (err) => {
  if(err) throw err;
});

module.exports = pool;
