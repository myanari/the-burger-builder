import React from 'react';
import btnClasses from './Button.css';
import classnames from 'classnames'

const standardClassBtn = [
    btnClasses.button,
    btnClasses.buttonBox,
    btnClasses.button3d,
    btnClasses.buttonLongShadow
];

// Instead of Success and Danger like Mr Schwartzmüller's project,
// The classes instead are gonna be Action and Caution

// My project's: buttonAction = Max's project: Success
// My project's: buttonCaution = Max's project: Caution
console.log(classnames(standardClassBtn));
const button = (props) => (
    <button
        style={{margin: '3px'}}
        className={classnames(standardClassBtn, btnClasses[props.btnType])} 
        onClick={props.clicked}>{props.children}</button>
);

export default button;