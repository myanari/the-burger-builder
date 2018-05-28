import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component {
  state = {
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingKey =>  ingredients[ingKey] )
      .reduce((sum, el) => sum + el, 0);

    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false });
  }

  continuePurchaseHandler = () => {
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredients[i])}`);
    }
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');

    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  render() {
    const disabledInfo = { ...this.props.ings };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = <Modal show><Spinner /></Modal>

    if (this.props.ings) {
      burger = (
        <Fragment>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ordered={this.purchaseHandler}
            ingredientAdded={this.props.onIngredientAdded} 
            ingredientRemoved={this.props.onIngredientRemoved} 
            disabled={disabledInfo} 
            price={this.props.price} 
            purchaseable={this.updatePurchaseState(this.props.ings)} />
        </Fragment>
      );
      orderSummary = (
        <OrderSummary
          canceled={this.cancelPurchaseHandler}
          continue={this.continuePurchaseHandler}
          ingredients={this.props.ings}
          price={this.props.price} />
      );
    }
    // returns some JSX
    return (
      <Fragment>
        <Modal 
          show={this.state.purchasing} 
          closeModal={this.cancelPurchaseHandler}>
            { orderSummary }
        </Modal>
        { burger }
      </Fragment>);
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));