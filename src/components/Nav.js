import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => (
    <nav class="main-nav">
        <ul>
            <li><NavLink exact to="/technology">Technology</NavLink></li>
            <li><NavLink exact to="/cameras">Cameras</NavLink></li>
            <li><NavLink exact to="/computers">Computers</NavLink></li>
        </ul>
    </nav>
    
);

export default Nav;