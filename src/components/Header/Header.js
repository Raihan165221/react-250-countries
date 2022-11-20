import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    let activeStyle = {
        color: '#6fbfff',
        fontWeight: 'bold',
    };
    return (
        <div className='header'>
            <h2><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> Visit Countries</h2>
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