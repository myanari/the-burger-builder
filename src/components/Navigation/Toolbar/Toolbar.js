import React from 'react';
import cssCl from './Toolbar.css';

const toolbar = (props) => (
    <div className={cssCl.Toolbar}>
        {props.children}
    </div>
);

export default toolbar;