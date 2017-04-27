const dbConfig = {
  development:{
    database: 'roombooking',
    user: 'postgres',
    password: '123456'
  },
  test: {
    database: 'test_room_booking',
    user: 'postgres',
    password: '123456'
  },
  production: {
    database: 'roombooking',
    user: 'postgres',
    password: '123456'
  }
};

module.exports = dbConfig[process.env.NODE_ENV] || dbConfig.development;
