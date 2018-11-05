import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Picture from './topbar/Picture';
import MenuDrawer from './topbar/MenuDrawer';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  topBar: {
    width: '100%',
    marginTop: theme.spacing.unit * 2,
    borderRadius: 25,
    background: '#191414',
    boxShadow: '0px 0px 10px 2px #FFFFFF'
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    color: '#FFFFFF'
  }
});

const TopBar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.topBar}>
        <ToolBar className={classes.toolBar}>
          <MenuDrawer />
          <Typography className={classes.header} variant="h4">
            Jeejee
          </Typography>
          <Picture image={props.userData.images[0].url} />
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(TopBar);
