import React, { Component } from 'react';
import axios from '../../../axios-orders';

import styles from './CustomerData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';

class CustomerData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Marcelle',
        address: {
          street: 'Rua Teste',
          zipcode: '12354',
          country: 'Finland'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
      .then(res => {
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
      })
  }

  render() {
    let form = (
      <form>
        <input className={styles.Input} type="text" name="name" placeholder="Your name"/>
        <input className={styles.Input} type="email" name="email" placeholder="Your email"/>
        <input className={styles.Input} type="text" name="street" placeholder="Your street name"/>
        <input className={styles.Input} type="text" name="postal" placeholder="Your postal code"/>
        <Button btnType="buttonAction" clicked={this.orderHandler}>Submit</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return(
      <div className={styles.CustomerData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default CustomerData;