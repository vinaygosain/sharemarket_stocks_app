import React from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const HeaderComponent = () => (
    <header>
        <div className="horizontal-row">
            <div className="col-25"><Link to="/home"><img src={logo} width="50px" alt="logo" /></Link></div>
            <div className="col-75 title">STOCKUP</div>
        </div>
    </header>
);

export default HeaderComponent;
