import React from 'react';
import logo from '../images/logo.svg';
import './Logo.css';

const Logo = () => {
    return(
        <div className="ma4 mt0 ">
            <img src={logo} alt="findFace Logo" />
        </div>
    )
}

export default Logo;
