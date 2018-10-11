import express from 'express';

import cors from 'cors';
import bodyParser from 'body-parser';

import spotify from '../routes/spotify';

const apiServer = express();
const apiPort = process.env.apiPort || 5000;

const logToConsole = text => {
  console.log(`${new Date().toLocaleString()} - ${text}`);
};

apiServer.use(cors());
apiServer.use(bodyParser.json());

apiServer.use('/api/spotify', spotify);

apiServer.all('*', (req, res) => {
  return res.sendStatus(404);
});

export const start = () => {
  apiServer.listen(apiPort, () => {
    logToConsole('API Server started');
    logToConsole(`API Server listening on port: ${apiPort}`);
  });
};
