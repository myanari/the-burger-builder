import React from 'react';

import styles from './Order.css';

const order = (props) => (
  <div className={styles.Order}>
    <p>Ingredients: {}</p>
    <p>Price <strong>{props.data.deliveryMethod}</strong></p>
  </div>
);

export default order;