import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return (
                <li key={ingKey}>
                    <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
                </li>); 
        });

    return (
        <Fragment>
            <h3>Your order</h3>
            <p>A burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>Continue with checkout?</p>
            <Button
                btnType="buttonCaution"
                clicked={props.canceled}><i class="fa fa-repeat"></i></Button>
            <Button
                btnType="buttonAction"
                clicked={props.continue}><i class="fa fa-check"></i></Button>
        </Fragment>
    );
};

export default orderSummary;