import React, { Fragment } from 'react';
import Button from '../../UI/Button/Button';
import cssCl from './OrderSummary.css';

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
            <div className={cssCl.Card}>
                <p>Total: US$ {props.price.toFixed(2)}</p>
            </div>
            <p>Continue with checkout?</p>
            <Button
                btnType="buttonCaution"
                clicked={props.canceled}><i className="fa fa-repeat"></i></Button>
            <Button
                btnType="buttonAction"
                clicked={props.continue}><i className="fa fa-check"></i></Button>
        </Fragment>
    );
};

export default orderSummary;