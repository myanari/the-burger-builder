import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return(
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{width: '300px', height: '300px', margin: 'auto'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="buttonCaution">CANCEL</Button>
      <Button btnType="buttonAction">CONTINUE</Button>
    </div>
  );
}

export default checkoutSummary;