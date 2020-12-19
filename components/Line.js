import React from 'react';
import Link from 'next/link';

import Value from './Value.js';

import styles from './Line.module.css';

function Line({ ...props }) {

  return (
    <Link href="/[id]" as={props.id}>
      <a>
        <div className={styles.Line}>
          <Value className={styles.Marka} Value={props.Marka} Numb={props.Numb} />
          <Value className={styles.Model} Value={props.Model} />
          <Value className={styles.Yil} Value={props.Yil} />
          <Value className={styles.Ceker} Value={props.Ceker} />
          <img className={styles.Img} src="next.png"></img>
        </div>
      </a>
    </Link>
  );
}

export default Line;
