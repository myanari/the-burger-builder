import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import cssClasses from './Burger.css'

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingrKey => { // keys: name of ingredient
            return [...Array(props.ingredients[ingrKey])]  // values: how many
                .map((_, index) => {
                    return <BurgerIngredient key={ingrKey + index} type={ingrKey} />;
                })
        });
    return(
        <div className={cssClasses.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;