import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios-orders';
import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from '../../components/Order/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token);
  }

  render() {
    let orders = <Modal show><Spinner /></Modal>;
    if (!this.props.orders) {
			console.log('this.props.orders');
		}
    if (!this.props.loading) {
      orders = this.props.orders.map(order => {
				return <Order data={order} key={order.id} />
			});
    }
    return (
      <div>
        {orders}
      </div>);
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: token => dispatch(actions.fetchOrders(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));