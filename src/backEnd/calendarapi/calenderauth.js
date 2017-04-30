const fs = require('fs');
const readline = require('readline');
const googleAuth = require('google-auth-library');
const {CLIENT_SECRET,CLIENT_ID,REDIRECT_URIS,HOME,HOMEPATH,USER_PROFILE} = require('../../../config.js').API_GOOGLE;

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const TOKEN_DIR = (HOME || HOMEPATH ||USER_PROFILE) + '/.credentials/';
const TOKEN_PATH = TOKEN_DIR + 'calendar-nodejs-quickstart.json';


const authorize = (callback)=> {
  const clientSecret = CLIENT_SECRET;
  const clientId = CLIENT_ID;
  const redirectUrl = REDIRECT_URIS;
  const auth = new googleAuth();
  const oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  fs.readFile(TOKEN_PATH, (err, token)=> {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
};

const getNewToken = (oauth2Client, callback)=> {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl); //eslint-disable-line
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', (code)=> {
    rl.close();
    oauth2Client.getToken(code, (err, token)=> {
      if (err) {
        console.log('Error while trying to retrieve access token', err); //eslint-disable-line
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
};

const storeToken = (token)=> {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH); //eslint-disable-line
};

module.exports = authorize;
