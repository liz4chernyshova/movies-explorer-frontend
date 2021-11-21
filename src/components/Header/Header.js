import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

function Header(props) {

    const userLocation = useLocation();

    return (
        <header className={`${userLocation.pathname === "/" ? "header" : "header header-logged-in"}`}>
            <div className="header__logo"></div>
            <article className="header__section">
                <Navigation />
            </article>
        </header>
    )
}

export default Header;