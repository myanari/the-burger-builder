import React, {Fragment} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import cssCl from './Layout.css';

// Aux HOC = wrapping something and immediately outputting it
// Fulfilling the requirement of having a wrapping component
const layout = (props) => (
    <Fragment>
        <Toolbar />
        <div>SideDrawer</div>
        <main className={cssCl.MainContent}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;