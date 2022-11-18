import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props)
    return (
        <div className='single-country'>
            <img src={props.country.flags.png} alt="" />
            <h1>{props.country.name.common}</h1>
            <h3>Captal: {props.country.capital}</h3>
            <p>Population: {props.country.population}</p>
            <button className='btn' onClick={() => props.handleAddToCart(props.country)}>Visit Country</button>
        </div>
    );
};

export default Country;