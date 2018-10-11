import { Router } from 'express';

const spotifyRouter = (module.exports = new Router());

spotifyRouter.get('/jee', (req, res) => {
  res.send('moika');
});
