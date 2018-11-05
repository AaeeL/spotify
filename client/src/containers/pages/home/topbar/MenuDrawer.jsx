import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';

const styles = {
  root: {
    color: '#191414'
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  menuIcon: {
    color: '#FFFFFF'
  }
};

const drawerStyle = {
  color: '#191414'
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List className={classes.paper} />
      </div>
    );

    return (
      <div className={classes.root}>
        <IconButton onClick={this.toggleDrawer('left', true)}>
          <MenuIcon fontSize="large" className={classes.menuIcon} />
        </IconButton>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
