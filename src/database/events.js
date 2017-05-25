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
const updateDBEvent = (data,userId,cb)=>{
  const sqlQuery = 'UPDATE bookings SET summary=$1,description=$2,location=$3,start_date=$4,end_date=$5 WHERE event_id=$5 AND users_id=$6';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    client.query(sqlQuery,[data.summary,data.description,data.location,data.start.dateTime,data.end.dateTime,data.eventID,userId],(err,result)=>{
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
const selectRoomEvents = (calendarId,cb)=>{
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    const sqlQuery = 'SELECT * from bookings WHERE calendar_id=$1';
    pool.query(sqlQuery,[calendarId],(err,result)=>{
      done(err);
      return err
        ? cb(err)
        : cb(null, result.rows);
    });
  });
};

const deleteDbEvent = (calendarID,eventID,cb)=>{
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    const sqlQuery = 'DELETE from bookings WHERE calendar_id=$1 AND event_id=$2';
    pool.query(sqlQuery,[calendarID,eventID],(err,result)=>{
      done(err);
      return err
        ? cb(err)
        : cb(null, result);
    });
  });
};

module.exports = {
  insertEvent,
  selectUserEvents,
  selectRoomEvents,
  deleteDbEvent,
  updateDBEvent
};
