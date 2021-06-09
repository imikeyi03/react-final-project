import React from 'react';
import { Route, NavLink,Redirect } from 'react-router-dom';



const Nav = (props) => (
    <nav class="main-nav">
        <ul>
            <li><NavLink to="#">Technology</NavLink></li>
            <li><NavLink to="#">Cameras</NavLink></li>
            <li><NavLink to="#">Computers</NavLink></li>
        </ul>
    </nav>
    
);

export default Nav;