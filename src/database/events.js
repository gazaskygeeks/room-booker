const pool = require('./pool.js');

const insertEvent = (data, userId,calenderId,roomName,roomId,cb)=>{
  const sqlQuery = 'INSERT INTO bookings(event_id,calendar_id,users_id,summary,description,event_link,location,start_date,end_date,room_id,room_name)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    client.query(sqlQuery,[data.id,calenderId,userId, data.summary,data.description,data.htmlLink,data.location,data.start.dateTime,data.end.dateTime,roomId,roomName],(err,result)=>{
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
      done(err);
      return err
        ? cb(err)
        : cb(null, result.rows);
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
      const response = result && result.rowCount > 0
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
