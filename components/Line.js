import React from 'react';
import Link from 'next/link';

import Value from './Value.js';

import styles from './Line.module.css';

import useWindowSize from '../hooks/useWindowSize';

function Line({ ...props }) {
  var d = new Date();
  const size = useWindowSize();
  let currentYear = d.getFullYear();
  let currentMonth = d.getMonth() + 1;
  let muayeneYear = parseInt(props.Muayene.slice(6,10));
  let muayeneMonth = parseInt(props.Muayene.slice(3,5));
  var check = false;
  const fiyat = props.Fiyat;
  const x = fiyat.toString().length;
  const y = x - 3;
  const second = fiyat.toString().slice(y,x);
  const first = fiyat.toString().slice(0,y);

  const saatValue = props.Saat;
  let saat = "";
  if (saatValue > 1){
    saat = saatValue
  } else {
    saat = ""
  }

  if (currentYear < muayeneYear) {
    check = true;
  } else if (props.Muayene == "Cekme" || props.Muayene == "Çekme" ) {
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

          {size.width > 767 ? <Value className={styles.Saat} Value={saat} /> : "" }
        
          {size.width > 700 ? <Value className={styles.Fiyat} Value={`${first}.${second}₺`} /> : "" }
          <img className={styles.Img} src="next.png"></img>
        </div>
      </a>
    </Link>
  );
}

export default Line;
