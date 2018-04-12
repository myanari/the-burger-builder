import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import cssClasses from './Burger.css'

const burger = (props) => {
    return(
        <div className={cssClasses.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;