import React from 'react';
import cssClasses from './BuildControl.css';
import btnClasses from './Buttons.css';

const buildControl = (props) => {
    const btn = [
        btnClasses.button,
        btnClasses.buttonAction,
        btnClasses.buttonCircle,
        btnClasses.buttonSmall
    ].join();

    return(
        <div className={cssClasses.BuildControl}>
            <div className={cssClasses.Label}>{props.label}</div>
            <button className={btn}><i class="fa fa-minus"></i></button>
            <button className={btn}><i class="fa fa-plus"></i></button>
        </div>
    );
};

export default buildControl;