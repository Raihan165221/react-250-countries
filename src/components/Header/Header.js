import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    let activeStyle = {
        color: 'red',
        fontWeight: 'bold',
    };
    return (
        <div className='header'>
            <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
            } to='home'>Home</NavLink>
            <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined
            } to='contact'>Contact</NavLink>
        </div>
    );
};

export default Header;