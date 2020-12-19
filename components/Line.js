import React from 'react';
import Link from 'next/link';

import Value from './Value.js';

import styles from './Line.module.css';

function Line({ ...props }) {
  var d = new Date();
  let currentYear = d.getFullYear();
  let currentMonth = d.getMonth() + 1;
  let muayeneYear = parseInt(props.Muayene.slice(6,10));
  let muayeneMonth = parseInt(props.Muayene.slice(3,5));
  var check = false;
  if (currentYear < muayeneYear) {
    check = true;
  } else if (props.Muayene == "Cekme") {
    check = true;
  } else if (currentYear == muayeneYear) {
    if (currentMonth < muayeneMonth) {
      check = true;
    }
  }
  return (
    <Link href="/[id]" as={props.id}>
      <a>
        <div className={!check ? styles.Red : styles.Line}>
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
