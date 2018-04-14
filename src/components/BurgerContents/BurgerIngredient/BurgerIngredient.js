import React from 'react';
import PropTypes from 'prop-types';

import cssCl from './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredient = null;
    // Inside a class, props doesn't work
    // Instead change it to this.props
    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={cssCl.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={cssCl.BreadTop}>
                    <div className={cssCl.Seeds1}></div>
                    <div className={cssCl.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={cssCl.Meat}></div>;
            break;
        case ('salad'):
            ingredient = <div className={cssCl.Salad}></div>;
            break;
        case ('bacon'):
            ingredient = <div className={cssCl.Bacon}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={cssCl.Cheese}></div>;
            break;
        default:
            ingredient = null;
    }
    return ingredient;
}

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default burgerIngredient;