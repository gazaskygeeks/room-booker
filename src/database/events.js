const pool = require('./pool.js');

const insertEvent = (data, userId,cb)=>{
  const sqlQuery = 'INSERT INTO bookings(event_id,users_id,summary,location,start_date,end_date,room_id)VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    client.query(sqlQuery,[data.id, userId, data.summary, data.location,data.start.dateTime,data.end.dateTime,data.iCalUID],(err,result)=>{
      done(err);
      return err
        ? cb(err)
        : cb(null, result);
    });
  });
};

const selectUserEvents = (userID,cb)=>{
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    const sqlQuery = 'SELECT * from bookings WHERE users_id=$1';
    pool.query(sqlQuery,[userID],(err,result)=>{
      const response = result.rowCount > 0
        ? result.rows[0]
        : null;
      done(err);
      return err
        ? cb(err)
        : cb(null, response);
    });
  });
};

const deleteEvents = (calendarID,eventID,cb)=>{
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    const sqlQuery = 'DELETE from bookings WHERE calendar_id=$1 && event_id=$2';
    pool.query(sqlQuery,[calendarID,eventID],(err,result)=>{
      const response = result.rowCount > 0
        ? result.rows[0]
        : null;
      done(err);
      return err
        ? cb(err)
        : cb(null, response);
    });
  });
};

module.exports = {
  insertEvent: insertEvent,
  selectUserEvents: selectUserEvents,
  deleteEvents: deleteEvents
};
