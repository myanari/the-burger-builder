import React from 'react';


import cssCl from './Modal.css';

const modal = (props) => (
    <div className={cssCl.Modal}>
        {props.children}
    </div>
);

export default modal;