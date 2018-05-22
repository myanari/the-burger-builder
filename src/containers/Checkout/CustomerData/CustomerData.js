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
          <input type="text" name="name" placeholder="Your name"/>
          <input type="email" name="email" placeholder="Your email"/>
          <input type="text" name="street" placeholder="Your street name"/>
          <input type="text" name="postal" placeholder="Your postal code"/>
          <Button btnType="btnAction" />
        </form>
      </div>
    );
  }
}

export default CustomerData;