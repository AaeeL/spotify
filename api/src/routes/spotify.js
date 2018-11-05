import { Router } from 'express';
import request from 'request';

const managerAddress = 'localhost:8000';
const spotifyRouter = (module.exports = new Router());

spotifyRouter.post('/user_data', (req, res) => {
  const options = {
    uri: `http://${managerAddress}/api/manager/get_user_data`,
    body: {
      access_token: req.body.access_token
    },
    json: true
  };
  request.post(options, (error, response, body) => {
    if (error) res.json(error);
    res.json(body);
  });
});
