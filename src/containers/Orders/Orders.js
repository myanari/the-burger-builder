import React, { Component } from 'react';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from '../../components/Order/Order/Order';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }

  componentDidMount() {
    axios.get('orders.json').then(res => {
      const fetchedOrders = [];
      for (let key in res.data) {
        fetchedOrders.push({
          ...res.data[key],
          id: key
        })
      }
      this.setState({loading: false, orders: fetchedOrders}, () => console.log(this.state));
    }).catch(err => {
      this.setState({loading: false});
    })
  }

  render() {
    return(
      <div>
        {this.state.orders.map((order, i) => {
          return <Order data={order} key={order.id} />
        })}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);