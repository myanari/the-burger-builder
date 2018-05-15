import React, { Fragment } from 'react';
import cssCl from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';

const sideDrawer = (props) => {
	const attachedClasses = [cssCl.SideDrawer, ]
  return (
  	<Fragment>
			<Backdrop show={props.open} leaveBackdrop={props.closed} />
			<div className={cssCl.SideDrawer} style={{marginBottom: '16px'}}>
				<Logo height="11%" />
				<nav className={cssCl.DesktopOnly}>
					<NavigationItems />
				</nav>
			</div>
		</Fragment>
  );
};

export default sideDrawer;