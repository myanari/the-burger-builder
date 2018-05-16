import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';

const sideDrawer = (props) => {
	let cx = classNames.bind(styles);
	let attachedClasses = cx({
		SideDrawer: true,
		Open: props.open,
		Close: !props.open
	});

  return (
  	<Fragment>
			<Backdrop show={props.open} leaveBackdrop={props.closed} />
			<div className={attachedClasses} style={{marginBottom: '16px'}}>
				<Logo height="11%" />
				<nav className={styles.DesktopOnly}>
					<NavigationItems />
				</nav>
			</div>
		</Fragment>
  );
};

export default sideDrawer;