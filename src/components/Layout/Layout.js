import React, {Fragment} from 'react';
import Toolbar from './Toolbar/Toolbar';
import cssCl from './Layout.css';

// Aux HOC = wrapping something and immeadiately outputting it
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