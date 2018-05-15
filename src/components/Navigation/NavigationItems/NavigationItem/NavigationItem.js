import React from 'react';
import cssCl from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={cssCl.NavigationItem}>
        <a href={props.link} className={props.active ? cssCl.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;