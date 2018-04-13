import React, {Component, Fragment} from 'react';
import Burger from '../../components/BurgerContents/Burger';
import BuildControls from "../../components/BurgerContents/BuildControls/BuildControls";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render(){
        // returns some JSX
        return(
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Fragment>
        );
    }
}

export default BurgerBuilder;