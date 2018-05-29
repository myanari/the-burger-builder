import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomerData from './CustomerData/CustomerData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import styles from './Checkout.css';

class Checkout extends Component {
  checkoutContinuedHandler = () => {
    this.props.history.replace('/checkout/customer-data');
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  render() {
    let summary = <Redirect to="/" />;

    if (this.props.ings) {
    	summary = (
    		<div className={styles.CheckoutSummary}>
					<CheckoutSummary
						ingredients={this.props.ings}
						checkoutCancelled={this.checkoutCancelledHandler}
						checkoutContinued={this.checkoutContinuedHandler}/>
					<Route
						path={this.props.match.path + '/customer-data'}
						component={CustomerData} />
				</div>
			);
		}
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients
  }
};

export default connect(mapStateToProps)(Checkout);