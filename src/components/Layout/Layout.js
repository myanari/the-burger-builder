import React, {Fragment} from 'react';

// Aux HOC = wrapping something and immeadiately outputting it
// Fulfilling the requirement of having a wrapping component
const layout = (props) => (
    <Fragment>
        <div> Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Fragment>
);

export default layout;