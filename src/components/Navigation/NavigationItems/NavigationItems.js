import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.css';

const navigationItems = (props) => (
	<ul className={styles.NavigationItems}>
		<NavigationItem link="/" exact>Burger Builder</NavigationItem>
		<NavigationItem link="/orders">Orders</NavigationItem>
		{
			!props.isAuthenticated
				? <NavigationItem link="/auth">Auth</NavigationItem>
				: <NavigationItem link="/logout">Logout</NavigationItem>
		}
	</ul>
);

export default navigationItems;