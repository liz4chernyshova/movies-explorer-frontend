import React from 'react';
import './HeaderMovies.css';
import { useLocation } from 'react-router';
import Navigation from '../Navigation/Navigation';
import MobileVersionNav from '../MobileVersionNav/MobileVersionNav';

function HeaderMovies({ loggedIn }) {
    
    let location = useLocation();

    return (
        <header 
            className={`${
                location.pathname === "/"
                ? "header-movies"
                : "header-movies header-movies-logged-in"
            }`}> 
            <div className="header__logo"></div>
            <Navigation loggedIn={loggedIn}/>
            <MobileVersionNav loggedIn={loggedIn}/>
        </header>
        )  
}

export default HeaderMovies;