import React from 'react';
import { Route, NavLink,Redirect } from 'react-router-dom';

import PhotoContainer from './photos/PhotoContainer';

const Nav = (props) => (
    <nav class="main-nav">
        <ul>
            <li><NavLink to="#">Biceps</NavLink></li>
            <li><NavLink to="#">Chest</NavLink></li>
            <li><NavLink to="#">Legs</NavLink></li>
        </ul>
    </nav>
    
);

export default Nav;