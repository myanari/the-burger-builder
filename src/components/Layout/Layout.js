import React, {Fragment} from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import cssCl from './Layout.css';

// Aux HOC = wrapping something and immediately outputting it
// Fulfilling the requirement of having a wrapping component
const layout = (props) => (
    <Fragment>
        <Toolbar />
        <SideDrawer />
        <main className={cssCl.MainContent}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;