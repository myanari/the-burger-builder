import React, { Fragment } from 'react';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return (
                <li>
                    <span style={{textTransform: 'capitalize'}}>{ingKey}</span>:{props.ingredients[ingKey]}
                </li>); 
        });

    return (
        <Fragment>
            <h3>Your order</h3>
            <p>A burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue with checkout?</p>
        </Fragment>
    );
};

export default orderSummary;