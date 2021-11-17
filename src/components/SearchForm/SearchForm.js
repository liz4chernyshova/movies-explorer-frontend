import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/searchicon.svg';

function SearchForm(props) {

   function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <section className="form__conteiner">
      <form className="search__form" onSubmit={handleSubmit} >
        <fieldset className="search__form_type_films">
          <button className="search__submit"><img className="search__icon" src={searchIcon} alt="поиска"></img></button>
          <input className="search__input"  name="search" placeholder="Фильм" type="search" id="search" minLength="2" maxLength="200" required />
          <span className="search-error"></span>
          <button className="search__button" type="submit" onClick={props.search}>Найти</button>
        </fieldset>
        <div className="search-filter">
          <label className="search-filter__label">
            <input className="search-filter__input" type="checkbox" />
            <span className="search-filter__slider" />
          </label>
          <p className="search-filter__title">Короткометражки</p>
        </div>
      </form>
    </section>
  ) 
}

export default SearchForm;