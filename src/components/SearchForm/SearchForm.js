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
          <input className="search__input"  name="search" placeholder="Фильм" type="search" id="search" />
          <span className="search-error"></span>
          <button className="search__button" type="submit" onClick={props.search}>Найти</button>
        </fieldset>
        <fieldset className="search__form_type_range">
          <input type="range" className="search__content" name="search__content" id="search__content" />
          <div className="search__text">Короткометражки</div>
        </fieldset>
      </form>
    </section>
  ) 
}

export default SearchForm;