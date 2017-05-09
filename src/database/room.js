const pool = require('./pool.js');

const addRoom =(data,cb)=>{
  const sqlQuery = 'INSERT INTO rooms (room_name,room_capacity,room_image,location) values ($1,$2,$3,$4) RETURNING *';
  pool.connect((poolError,client, done)=>{
    if(poolError){
      return cb(poolError);
    }
    client.query(sqlQuery,[data.room_name,data.room_capacity,data.image,data.room_location],(err,result)=>{
      done(err);
      return err
      ? cb(err)
      : cb(null, result);
    });
  });
};

const selectRoom= (cb)=>{
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    const sqlQuery = 'SELECT * from rooms';
    client.query(sqlQuery,(err,result)=>{
      const response = result.rowCount > 0
        ? result.rows
        : null;
      done(err);
      return err
        ? cb(err)
        : cb(null, response);
    });
  });
};
const selectCalendarID = (roomId,cb)=>{
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    const sqlQuery = 'SELECT calendar_id from rooms where id=$1';
    client.query(sqlQuery,[roomId],(err,result)=>{
      const response = result.rowCount > 0
        ? result.rows[0].calendar_id
        : null;
      done(err);
      return err
        ? cb(err)
        : cb(null, response);
    });
  });
};


module.exports= {
  selectRoom,
  addRoom : addRoom,
  selectCalendarID:selectCalendarID
};
