import React, { Component } from 'react';

import styles from './CustomerData.css';
import Button from '../../../components/UI/Button/Button';

class CustomerData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }

  render() {
    return(
      <div className={styles.CustomerData}>
        <h4>Enter your contact data</h4>
        <form>
          <input className={styles.Input} type="text" name="name" placeholder="Your name"/>
          <input className={styles.Input} type="email" name="email" placeholder="Your email"/>
          <input className={styles.Input} type="text" name="street" placeholder="Your street name"/>
          <input className={styles.Input} type="text" name="postal" placeholder="Your postal code"/>
          <Button btnType="buttonAction">Submit</Button>
        </form>
      </div>
    );
  }
}

export default CustomerData;