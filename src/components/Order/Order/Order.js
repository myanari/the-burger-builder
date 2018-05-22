import React from 'react';

import styles from './Order.css';

const order = (props) => (
  <div className={styles.Order}>
    <p>Ingredients: US$ {}</p>
    <p>Price <strong>{Number(props.data.price).toFixed(2)}</strong></p>
  </div>
);

export default order;