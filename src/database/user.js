const config = require('./config.js');
const cl = require('./client.js');
const client = cl(config);

const insertUser = (data,cb)=>{
  const sqlQuery = `INSERT INTO users(email,priveleges,first_name,last_name)VALUES('${data.email}','1','${data.firstName}','${data.lastName}')`;
  client.query(sqlQuery,(err,result)=>{
    cb(err,result);
  });
};
const selectUser = (data,cb)=>{
  const sqlQuery = `SELECT email,first_name,last_name from users WHERE email='${data.email}'`;
  client.query(sqlQuery,(err,result)=>{
    cb(err,result);
  });
};
module.exports = {
  insertUser:insertUser,
  selectUser:selectUser
};
