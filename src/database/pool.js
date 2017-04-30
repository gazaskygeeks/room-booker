const dbConfig = require('../../config.js').DB_CONFIG;
const pg = require('pg');
const pool = new pg.Pool(dbConfig);

pool.on('error', (err) => {
  if(err) throw err;
});

module.exports = pool;
