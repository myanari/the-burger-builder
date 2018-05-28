import * as actionTypes from './actions';

const initialStore = {
  ingredients: null,
  totalPrice: 4
}

const reducer = (store = initialStore, actions) => {
  switch(action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {};
    case actionTypes.REMOVE_INGREDIENT:
      return {};
    default:
      return state;
  }
  return store;
}

export default reducer;