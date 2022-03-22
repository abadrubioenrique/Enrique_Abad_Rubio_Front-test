import React from 'react';
import logo from '../img/logo.png';
import '../styles/header.scss';

import {FiSearch} from 'react-icons/fi'
const Headercomponent = () => {
    return (
        <div className='nav'>
            <div className="nav__logo">
            <img src={logo} alt="Logo"/>
            </div>
            <div className="nav__search">
                <div className="nav__icon">
                    <FiSearch/>
                </div>
                    <input className='nav__input' type='text' placeholder="You're looking for something?"></input>
                </div>
        </div>

    );
}

export default Headercomponent;
