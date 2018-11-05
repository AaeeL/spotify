import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TopBar from './home/TopBar';
import { withStyles } from '@material-ui/core';

const styes = theme => ({
  root: {
    flexGrow: 1
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container>
        <TopBar userData={props.data} />;
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.user.data
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styes)(Home));
