import React from "react";
import './Navigation.css';
import { Link, NavLink } from "react-router-dom";
import acc_icon from '../../images/account_icon.svg';

function Navigation({ loggedIn }) {

  return (
    <>
      {!loggedIn && (
        <ul className="header-nav">
          <li>
            <Link to="/signup" className="header__link">Регистрация</Link>
          </li>
          <li>
            <Link to="/signin" className="header__link">
              <button className="header__link-button" type="submit">Войти</button>
            </Link>
          </li>
        </ul>
      )}
      {loggedIn && (
        <nav className="navigation">
          <div className="navigation__container">
            <li>
              <NavLink to="/movies" className="navigation__link">Фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="navigation__link">Сохраненные фильмы</NavLink>
            </li>
          </div>
          <div className="navigation__link-account">
            <NavLink to="/profile" className="navigation__link_account">
              <button className="navigation__link-button">Аккаунт
                <div className="navigation__link-button_acc"><img className="navigation__link-button_icon" src={acc_icon} alt="Иконка" /></div>
              </button>
            </NavLink>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navigation;