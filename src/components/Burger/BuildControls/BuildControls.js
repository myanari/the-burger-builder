import React from 'react';
import classnames from 'classnames';

import cssCl from "./BuildControls.css";
import btnClasses from '../../UI/Button/Button.css';
import BuildControl from "./BuildControl/BuildControl";

const orderBtn = [
  btnClasses.button,
  btnClasses.buttonLongShadow,
  btnClasses.buttonRounded,
  btnClasses.buttonRoyal,
  cssCl.BuildControl
];

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = props => (
  <div className={cssCl.BuildControls}>
    <p>
      Current price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button 
      className={classnames(orderBtn)}
      disabled={ !props.purchaseable }
      onClick={props.ordered}>ORDER NOW</button>
  </div>
);

export default buildControls;