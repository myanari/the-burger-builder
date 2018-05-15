import React from 'react';
import cssCl from './Backdrop.css'

const Backdrop = (props) => (
    props.show ? <div className={cssCl.Backdrop} onClick={props.leaveBackdrop}/> : null
);

export default Backdrop;