const {DB_CONFIG} = require('../../config.js');
const pg = require('pg');
const pool = new pg.Pool(DB_CONFIG);

pool.on('error', (err) => {
  if(err) throw err;
});

module.exports = pool;
