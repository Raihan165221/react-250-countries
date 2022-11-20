import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css'
const Card = ({ cart, handleRemove }) => {
    let visit;
    if (cart.length === 0) {
        visit = <p>Please Visit Any Country!!!</p>
    }
    else {
        visit = <div>
            <b>Thanks for Visit!!! Go Contact Button.</b><br />
            <button className='go-contact'><NavLink className='go-contact' to='/contact'>Go Contact</NavLink></button>
        </div>
    }
    return (
        <div className='card'>
            <h2>Selected Country: {cart.length}</h2>
            {
                cart.map(country => <p key={country?.maps?.googleMaps}>{country?.name?.common} <button id='remove-btn' onClick={() => handleRemove(country)}>Remove</button> </p>)
            }
            <dir className='visit'>{visit}</dir>
        </div>
    );
};

export default Card;