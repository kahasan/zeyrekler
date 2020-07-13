import React from 'react';

import Value from './Value.js';

import styles from './Detailsline.module.css';

function Detailsline({ className, ...props }) {
  return (
    <div className={styles.Detailsline}>
      <div>{props.Text}</div>
      <Value className={className} Value={props.Value} />
    </div>
  );
}

export default Detailsline;
