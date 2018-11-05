import { Router } from 'express';
import queryString from 'querystring';
import request from 'request';
import cookieParser from 'cookie-parser';

const client_id = '2a5b75292abd4961a1c5792d940a1997';
const client_secret = '5bfb37ed8a6246029544e9767811b421';
const redirect_uri = 'http://localhost:5000/api/user/callback';
const stateKey = 'spotify_auth_state';

const loginRouter = (module.exports = new Router());

const getState = () => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 16; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

loginRouter.get('/login', (req, res, next) => {
  const state = getState();
  res.cookie(stateKey, state);
  const scope = 'user-read-private user-read-email user-read-birthdate';
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      queryString.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      })
  );
});

loginRouter.get('/callback', (req, res, next) => {
  const code = req.query.code;
  const state = req.query.state;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState)
    res.redirect('/#' + querystring.stringify({ error: 'state_mismatch' }));
  else {
    res.clearCookie(stateKey);
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(client_id + ':' + client_secret).toString('base64')
      },
      json: true
    };
    request.post(authOptions, (err, response, body) => {
      if (!err) {
        res.redirect(
          'http://localhost:3000#' +
            queryString.stringify({
              access_token: body.access_token,
              refresh_token: body.refresh_token
            })
        );
      } else {
        res.json({
          success: false,
          err
        });
      }
    });
  }
});
