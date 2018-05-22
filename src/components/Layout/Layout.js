import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../../containers/Checkout/Checkout';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import cssCl from './Layout.css';

class layout extends Component {
	state = {
		showSideDrawer: false
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerOpenedHandler = () => {
		this.setState(prevState => {
			return { showSideDrawer: !prevState.showSideDrawer }
		});
	};

	render() {
		return(
			<Fragment>
				<Toolbar openSideDrawer={this.sideDrawerOpenedHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler} />
				<main className={cssCl.MainContent}>{this.props.children}</main>
			</Fragment>
		);
	}
}

export default layout;