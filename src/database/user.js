const config = require('./config.js');
const pg = require('pg');
const pool = new pg.Pool(config);

const insertUser = (data,cb)=>{
  const sqlQuery = 'INSERT INTO users(email,privileges,first_name,last_name)VALUES($1,$2,$3,$4)';
  pool.query(sqlQuery,[data.email,'1',data.firstName,data.lastName],(err,result)=>{
    cb(err,result);
  });
};
const selectUser = (email,cb)=>{
  const sqlQuery = 'SELECT id,email,first_name,last_name from users WHERE email=$1';
  pool.query(sqlQuery,[email],(err,result)=>{
    cb(err,result);
  });
};
module.exports = {
  insertUser:insertUser,
  selectUser:selectUser
};
