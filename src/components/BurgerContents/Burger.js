import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import cssClasses from './Burger.css'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) // RETURNS ONLY KEYS
        .map(ingrKey => { // for each of them
            return [...Array(props.ingredients[ingrKey])] // Array(1), Array(2)
                .map((_, index) => {
                    return <BurgerIngredient key={ingrKey + index} type={ingrKey} />;
                })
        })
        .reduce((prevArr, cur) => {
            return prevArr.concat(cur);
        }, []); // transform an array into something else
    
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients.</p>
    }
    console.log(transformedIngredients);
    return(
        <div className={cssClasses.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;