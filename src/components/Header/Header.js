import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    let activeStyle = {
        color: '#6fbfff',
        fontWeight: 'bold',
    };
    return (
        <div className='header'>
            <h2>Visit Countries</h2>
            <div>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to='home'>Home</NavLink>
                <NavLink style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                } to='contact'>Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;