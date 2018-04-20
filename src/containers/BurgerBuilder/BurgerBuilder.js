import React, { Component, Fragment } from 'react';
import Burger from '../../components/BurgerContents/Burger';
import BuildControls from '../../components/BurgerContents/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/BurgerContents/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.8
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 5,
    purchaseable: false,
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingKey =>  ingredients[ingKey] )
      .reduce((sum, el) => sum + el, 0);

    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };

    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;

    const newPrice = oldPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) { return }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };

    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];

    const oldPrice = this.state.totalPrice;

    const newPrice = oldPrice - priceDeduction;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });

    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  cancelPurchaseHandler = () => {
    this.setState({ purchasing: false });
  }

  continuePurchaseHandler = () => {
    alert('YOU CONTINUED!');
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    // returns some JSX
    return (
      <Fragment>
        <Modal 
          show={this.state.purchasing} 
          closeModal={this.cancelPurchaseHandler}>
            <OrderSummary
              canceled={this.cancelPurchaseHandler}
              continue={this.continuePurchaseHandler}
              ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ordered={this.purchaseHandler}
          ingredientAdded={this.addIngredientHandler} 
          ingredientRemoved={this.removeIngredientHandler} 
          disabled={disabledInfo} 
          price={this.state.totalPrice} 
          purchaseable={this.state.purchaseable} />
      </Fragment>);
  }
}

export default BurgerBuilder;