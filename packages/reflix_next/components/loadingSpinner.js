import React from 'react';

import classes from './loadingSpinner.module.css';

const LoadingSpinner = props => {
  return (
    <div className={`${props.asOverlay && classes.loading_spinner__overlay}`}>
      <div className={classes.ring}></div>
    </div>
  );
};

export default LoadingSpinner;