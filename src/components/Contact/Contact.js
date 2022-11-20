import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div>
                <h1><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Contact Us</h1>
                <p className='contact-text'>If You Are Interested to visit any Country, you should <br /> must contact with us.</p>
            </div>
            <div className='contact-info'>
                <div>
                    <h1><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></h1>
                    <h4>Call Us On</h4>
                    <p>+990009999</p>
                </div>
                <div>
                    <h1><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></h1>
                    <h4>Email Us At</h4>
                    <p>country.searchcountry@gmail.com</p>
                </div>
                <div>
                    <h1><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></h1>
                    <h4>Visit Office</h4>
                    <p>Mirpur-1, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='contact-input'>
                <input id='unique1' className='common-input' type="text" placeholder='Your Name' />
                <input id='unique2' className='common-input' type="text" placeholder='Your Email' /><br />
                <input className='common-input' type="text" placeholder='Your Subject' /><br />
                <textarea className='common-input' placeholder='Your Message...' name="" id="" cols="145" rows="10"></textarea><br />
                <button id='send-btn'>Send Message</button>
            </div>
        </div>
    );
};

export default Contact;