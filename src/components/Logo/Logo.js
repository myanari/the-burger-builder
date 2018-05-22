import React from 'react';

import styles from './Logo.css';
import burgerLogo from '../../assets/images/logo.png';

const logo = (props) => (
	<div className={styles.Logo} style={{height: props.height}}>
		<img src={burgerLogo} alt="My Burger Logo"/>
	</div>
);

export default logo;