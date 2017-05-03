const {selectRoom} = require('../../database/room.js');
module.exports = {
  getRooms: (req,res)=>{
    selectRoom((err,rooms)=>{
      if(err)
        res.status(401).end();
      else {
        res.json(rooms).end();
      }
    });
  }
};
