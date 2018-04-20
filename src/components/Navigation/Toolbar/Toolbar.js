import React from 'react';
import Logo from '../../Logo/Logo';
import cssCl from './Toolbar.css';

const toolbar = (props) => (
    <header className={cssCl.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav></nav>
    </header>
);

export default toolbar;