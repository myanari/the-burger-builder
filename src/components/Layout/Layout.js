import React, {Fragment} from 'react';
import cssCl from './Layout.css';

// Aux HOC = wrapping something and immeadiately outputting it
// Fulfilling the requirement of having a wrapping component
const layout = (props) => (
    <Fragment>
        <div> Toolbar, SideDrawer, Backdrop</div>
        <main className={cssCl.MainContent}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;