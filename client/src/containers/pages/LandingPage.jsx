import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import LoginButton from './landingPage/LoginButton';
import { getUserInfo } from '../../state/modules/user/thunks';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2
  },
  header: {
    color: 'white'
  }
});

const getHashParams = () => {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);

  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

const LandingPage = props => {
  const { classes } = props;
  const hashParams = getHashParams();
  if (Object.keys(hashParams).length !== 0) {
    sessionStorage.setItem('access_token', hashParams.access_token);
    sessionStorage.setItem('refresh_token', hashParams.refresh_token);
    props.userData(sessionStorage.getItem('access_token'));
  }
  return (
    <div className={classes.root}>
      {sessionStorage.getItem('access_token') &&
        sessionStorage.getItem('refresh_token') && <Redirect to="/home" />}
      <Typography className={classes.header} variant="display2">
        You must sign in with Spotify to continue :(
      </Typography>
      <LoginButton />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  userData(token) {
    dispatch(getUserInfo(token));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(LandingPage));
