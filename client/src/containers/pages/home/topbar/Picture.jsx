import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const avatarStyle = {
  margin: '10'
};

const Picture = props => {
  return (
    <div>
      <Avatar alt="user-photo" src={props.image} style={avatarStyle} />
    </div>
  );
};

export default Picture;
