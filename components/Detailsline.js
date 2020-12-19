import React from 'react';

import Value from './Value.js';

import styles from './Detailsline.module.css';

function Detailsline({ className, ...props }) {
  return (
    <div className={styles.Detailsline}>
      <div>{props.Text}</div>
      {props.Value ? (
        <Value className={className} Value={props.Value} />
      ) : (
        'Belirtilmedi'
      )}
    </div>
  );
}

export default Detailsline;
