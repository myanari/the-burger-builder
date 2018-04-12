import React, {Component, Fragment} from 'react';
import Burger from '../../components/BurgerContents/Burger';

class BurgerBuilder extends Component {
    render(){
        // returns some JSX
        return(
            <Fragment>
                <Burger />
                <div>Build Controls</div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;