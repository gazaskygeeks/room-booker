if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'){
  require('dotenv').config();
}

const dbConfig = (env) => {
  if(env ==='development'){
    return {
      database: process.env.DEV_DATABASE,
      user: process.env.DEV_USER,
      password: process.env.DEV_PASSWORD
    };
  }
  else if(env ==='test'){
    return {
      database: process.env.TEST_DATABASE,
      user: process.env.TEST_USER,
      password: process.env.TEST_PASSWORD
    };
  } else if(env === 'production'){
    return{
      database: process.env.PROD_DATABASE,
      user: process.env.PROD_USER,
      password: process.env.PROD_PASSWORD,
      host: process.env.PROD_HOST,
      port: 5432,
      ssl: true
    };
  }
};

module.exports = {
  DB_CONFIG: dbConfig(process.env.NODE_ENV),
  API_GOOGLE: {
    PRIVATE_KEY:process.env.PRIVATE_KEY,
    CLIENT_EMAIL:process.env.CLIENT_EMAIL
  },
  PORT: process.env.PORT || 8080
};
