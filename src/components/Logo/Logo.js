import React from 'react';

import cssCl from './Logo.css';
import burgerLogo from '../../assets/images/logo.png';

const logo = (props) => (
    <div className={cssCl.Logo}>
        <img src={burgerLogo} alt="My Burger Logo"/>
    </div>
);

export default logo;