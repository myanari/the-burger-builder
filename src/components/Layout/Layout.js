import React, { Component, Fragment } from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import cssCl from './Layout.css';

// Aux HOC = wrapping something and immediately outputting it
// Fulfilling the requirement of having a wrapping component
class layout extends Component {
	state = {
		showSideDrawer: true
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false});
	};

	render() {
		return(
			<Fragment>
				<Toolbar />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler} />
				<main className={cssCl.MainContent}>{this.props.children}</main>
			</Fragment>
		);
	}
}

export default layout;