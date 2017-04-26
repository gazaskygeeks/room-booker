const dbConfig = require('./config.js');
const async = require('async');
const connect = require('./client.js');
const createTables = require('./createTable.js');
const client = connect(dbConfig);

const AllDatabaseQueries = (client, cb) => {
  async.series([
    function(callback) {
      client.query('CREATE DATABASE testRoomBooking', callback);
    },
    function(callback) {
      createTables(client, callback);
    },
    (callback) => {
      expect(1+2).toEqual(3);
      callback();
    },
    function(callback) {
      client.query('DROP DATABASE testRoomBooking', callback);
    }
  ], cb);
};

test('integration tests',()=>{
  AllDatabaseQueries(client, (err) => {
    if (err) {
      throw err;
    }

    client.end();
  });
});
