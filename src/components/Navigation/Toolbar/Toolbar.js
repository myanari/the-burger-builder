import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import cssCl from './Toolbar.css';

const toolbar = () => (
    <header className={cssCl.Toolbar}>
        <div>MENU</div>
        <Logo height="100%" />
        <nav><NavigationItems /></nav>
    </header>
);

export default toolbar;