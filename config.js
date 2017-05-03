if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'){
  require('dotenv').config();
}

const dbConfigAll = {
  development:{
    database: process.env.DEV_DATABASE,
    user: process.env.DEV_USER,
    password: process.env.DEV_PASSWORD
  },
  test: {
    database: process.env.TEST_DATABASE,
    user: process.env.TEST_USER,
    password: process.env.TEST_PASSWORD
  },
  production: process.env.DATABASE_URL
};
const dbConfig = dbConfigAll[process.env.NODE_ENV] || dbConfigAll.development;
module.exports = {
  DB_CONFIG: dbConfig,
  API_GOOGLE: {
    PRIVATE_KEY:process.env.PRIVATE_KEY,
    CLIENT_EMAIL:process.env.CLIENT_EMAIL
  },
  PORT: process.env.PORT || 8080
};
