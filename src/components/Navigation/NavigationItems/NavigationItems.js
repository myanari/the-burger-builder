import React from 'react';

import NavigationItem from './';
import cssCl from './NavigationItems.css';

const navigationItems = () => (
    <ul className={cssCl.NavigationItems}>
        <NavigationItem link="/" active>
            Burger Builder
        </NavigationItem>
        <NavigationItem link="/">
            Checkout
        </NavigationItem>
    </ul>
);

export default navigationItems;