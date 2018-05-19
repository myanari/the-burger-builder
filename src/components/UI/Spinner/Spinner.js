import React from 'react';
import styles from './Spinner.css';

const spinner = () => (
  <div className={styles.Spinner}>
  <div className={styles.Bounce1}></div>
  <div className={styles.Bounce2}></div>
  <div className={styles.Bounce3}></div>
</div>
);

export default spinner;