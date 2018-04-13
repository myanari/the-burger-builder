import React, {Component, Fragment} from 'react';
import Burger from '../../components/BurgerContents/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }
    render(){
        // returns some JSX
        return(
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;