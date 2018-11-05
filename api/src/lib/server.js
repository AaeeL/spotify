import express from 'express';

import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import spotify from '../routes/spotify';
import user from '../routes/user';

const apiServer = express();
const apiPort = process.env.apiPort || 5000;

const logToConsole = text => {
  console.log(`${new Date().toLocaleString()} - ${text}`);
};

apiServer.use(cors());
apiServer.use(bodyParser.json());
apiServer.use(cookieParser());

apiServer.use('/api/spotify', spotify);
apiServer.use('/api/user', user);

apiServer.all('*', (req, res) => {
  return res.sendStatus(404);
});

export const start = () => {
  apiServer.listen(apiPort, () => {
    logToConsole('API Server started');
    logToConsole(`API Server listening on port: ${apiPort}`);
  });
};
