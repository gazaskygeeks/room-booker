if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'){
  require('dotenv').config();
}
const url = require('url');

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
    const {auth,hostname,port,pathname} = url.parse(process.env.DATABASE_URL);
    const authe = auth.split(':');
    const config = {
      user: authe[0],
      password: authe[1],
      host: hostname,
      port: port,
      database: pathname.split('/')[1],
      ssl: true
    };
    return config;
  }
  else{
    throw 'err connecting database';
  }
};

module.exports = {
  USER_COOKIE: 'user_id',
  DB_CONFIG: dbConfig(process.env.NODE_ENV),
  API_GOOGLE: {
    PRIVATE_KEY:process.env.PRIVATE_KEY,
    CLIENT_EMAIL:process.env.CLIENT_EMAIL
  },
  PORT: process.env.PORT || 8080
};
