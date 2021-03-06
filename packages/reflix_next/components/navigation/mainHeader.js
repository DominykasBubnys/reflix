import React from 'react';

import classes from './mainHeader.module.css';

const MainHeader = props => {
  return <header className={classes.main_header}>{props.children}</header>;
};

export default MainHeader;