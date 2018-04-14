import React from 'react';
import cssCl from './BuildControl.css';
import btnClasses from './Buttons.css';
import classnames from 'classnames';

const buildControl = (props) => {
    const btn = [
        btnClasses.button,
        btnClasses.buttonSmall,
        btnClasses.buttonBox,
        btnClasses.buttonSecondary,
        btnClasses.buttonLongshadow
    ];

    const btnLess = [
        ...btn
    ];
    
    if (props.disabled){
        btnLess.push(btnClasses.disabled);
    }

    return(
        <div className={cssCl.BuildControl}>
            <div className={cssCl.Label}>{props.label}</div>
            <button 
                className={classnames(btnLess)}
                onClick={props.removed}
                disabled={props.disabled}><i class="fa fa-minus"></i></button>
            <button 
                className={classnames(btn)} 
                onClick={props.added}><i class="fa fa-plus"></i></button>
        </div>
    );
};

export default buildControl;