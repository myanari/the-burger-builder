import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CustomerData from './CustomerData/CustomerData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import styles from './Checkout.css';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 2,
      bacon: 1
    }
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for(let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ingredients: ingredients});
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
        <Route path={this.props.match.path + '/customer-data'} component={CustomerData} />
      </div>
    );
  }
}

export default Checkout;