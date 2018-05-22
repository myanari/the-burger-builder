import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CustomerData from './CustomerData/CustomerData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import styles from './Checkout.css';

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for(let param of query.entries()) {
      if(param[0] === price) {
        price = param[1];
      } else {
        ingredients[param[0]] = param[1];
      }
    }
    this.setState({ingredients: ingredients, price: price});
  }

  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/customer-data')
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  }

  render() {
    return(
      <div className={styles.CheckoutSummary}>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}/>
        <Route
          path={this.props.match.path + '/customer-data'}
          render={() => (<CustomerData ingredients={this.state.ingredients} price={this.state.price} />)} />
      </div>
    );
  }
}

export default Checkout;