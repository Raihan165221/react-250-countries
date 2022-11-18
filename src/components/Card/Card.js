import React from 'react';
import './Card.css'
const Card = ({ cart, handleRemove }) => {
    console.log(cart);
    return (
        <div className='card'>
            <h2>Selected Country: {cart.length}</h2>
            {
                cart.map(country => <p key={country?.maps?.googleMaps}>{country?.name?.common} <button onClick={() => handleRemove(country)}>Remove</button> </p>)
            }
        </div>
    );
};

export default Card;