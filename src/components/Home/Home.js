import React, { useState } from 'react';
import useCountries from '../../Hooks/useCountry';
import Card from '../Card/Card';
import Country from '../Country/Country';
import './Home.css'
const Home = () => {
    const [countries, setCountries] = useCountries();
    const [cart, setCart] = useState([]);
    const handleAddTOCart = (addedCountry) => {
        const exist = cart.find(country => country?.name?.common === addedCountry?.name?.common);
        if (!exist) {
            const newCart = [...cart, addedCountry];
            setCart(newCart);
        }
        else {
            alert('Already Added This Country')
        }
    }
    const handleRemove = (addedCountry) => {
        console.log(addedCountry);
        const rest = cart.filter(country => country?.name?.common !== addedCountry?.name?.common);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.name.common}
                        handleAddToCart={handleAddTOCart}
                    ></Country>)
                }
            </div>
            <div className="card-container">
                <Card handleRemove={handleRemove} cart={cart}></Card>
            </div>
        </div>
    );
};

export default Home;