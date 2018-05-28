import * as actionTypes from '../actions/actionTypes';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.8
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        }
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        }
      };
    default:
      return state;
  }
}

export default reducer;