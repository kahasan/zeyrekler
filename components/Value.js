import React from 'react';

import styles from './Value.module.css';

function Value({ className, ...props }) {
  return (
    <div className={styles.Value}>
      <div className={className}>{props.Value}</div>
    </div>
  );
}

export default Value;
