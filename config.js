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
  production: {
    database: process.env.PROD_DATABASE,
    user: process.env.PROD_USER,
    password: process.env.PROD_PASSWORD
  }
};
const dbConfig = dbConfigAll[process.env.NODE_ENV] || dbConfigAll.development;
module.exports = {
  DB_CONFIG: dbConfig,
  API_GOOGLE: {
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    CLIENT_ID: process.env.CLIENT_ID,
    REDIRECT_URIS: process.env.REDIRECT_URIS,
    HOME: process.env.HOME,
    HOME_PATH: process.env.HOMEPATH,
    USER_PROFILE: process.env.USERPROFILE
  },
  PORT: process.env.PORT || 8080
};
