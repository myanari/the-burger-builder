import React from 'react';
import styles from './Spinner.css';

const spinner = () => (
  <div className={styles.Ellipsis}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default spinner;