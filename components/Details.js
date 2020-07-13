import React from 'react';

import Detailsline from './Detailsline';

import styles from './Details.module.css';

function Details({ tractor }) {
  return (
    <div>
      <div>
        <Detailsline Text="Marka" Value={tractor.posts.Marka} />
        <Detailsline Text="Model" Value={tractor.posts.Model} />
        <Detailsline Text="Yıl" Value={tractor.posts.Yil} />
        <Detailsline Text="Ceker" Value={tractor.posts.Ceker} />
        <Detailsline Text="Plaka" Value={tractor.posts.Plaka} />
        <Detailsline Text="Saat" Value={tractor.posts.Saat} />
        <Detailsline
          Text="Muayene Tarihi"
          Value={tractor.posts.Muayene_Tarihi}
        />
        <Detailsline
          className={styles.Fiyat}
          Text="Fiyat"
          Value={tractor.posts.Fiyat}
        />
        <Detailsline Text="Kredi Miktarı" Value={tractor.posts.Kredi_Miktari} />
        <Detailsline
          className={styles.Aciklama}
          Text="Açıklama"
          Value={tractor.posts.Aciklama}
        />
      </div>
    </div>
  );
}

export default Details;
