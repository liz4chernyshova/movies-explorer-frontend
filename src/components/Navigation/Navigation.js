import React from "react";
import './Navigation.css';
import { Link, NavLink } from "react-router-dom";

export default function Navigation({ loggedIn }) {
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
              <NavLink to="/movies" className="navigation__link" activeClassName="menu__link_active">Фильмы</NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" className="navigation__link" activeClassName="menu__link_active">Сохраненные фильмы</NavLink>
            </li>
          </div>
          <NavLink to="/profile" className="navigation__link">
            <button className="navigation__profile-button">Аккаунт</button>
          </NavLink>
        </nav>
      )}
    </>
  );
}