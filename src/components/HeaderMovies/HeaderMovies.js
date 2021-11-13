import React from 'react';
import './HeaderMovies.css';
import Navigation from '../Navigation/Navigation';

function HeaderMovies() {

    return (
        <header className="header-movies"> 
            <div className="header__logo"></div>
            <Navigation />
        </header>
        )  
}

export default HeaderMovies;