import React from 'react';

import Line from '../components/Line.js';

import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div>
      <div className={styles.Layout}>{children}</div>
    </div>
  );
}

export default Layout;
