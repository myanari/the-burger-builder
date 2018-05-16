import React from 'react';
import Menu from '../Menu/Menu';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import cssCl from './Toolbar.css';

const toolbar = (props) => (
    <header className={cssCl.Toolbar}>
        <Menu openSideDrawer={props.openSideDrawer} />
        <Logo height="100%" />
        <nav><NavigationItems /></nav>
    </header>
);

export default toolbar;