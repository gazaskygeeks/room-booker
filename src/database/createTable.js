
module.exports = (client) => {

  client.query(`CREATE TABLE IF NOT EXISTS gsgStaff (
    id SERIAL PRIMARY KEY,
    email varchar(255),
    priveleges Integer,
    firstName varchar(50),
    lastName varchar(50)
  )`, function(err) {
    if (err) throw err;
  });
  client.query(`CREATE TABLE IF NOT EXISTS booking (
    id SERIAL PRIMARY KEY,
    eventID varchar(255),
    gsgstaffID integer REFERENCES gsgStaff(id)
  )`, function(err) {
    if (err) throw err;
  });
};
