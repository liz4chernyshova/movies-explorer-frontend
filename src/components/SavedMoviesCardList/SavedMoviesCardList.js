import React from 'react';
//import './MoviesCardList.css';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';
import dataFilmList from '../dataFilmList';

function SavedMoviesCardList(props) {
  function handleClick() {

  }
  return (
    <section className="cards"> 
      <div className="cards__conteiner">
        {dataFilmList.map((card) => (
          <SavedMoviesCard card={card} key={card.name}/>
        ))}
      </div>
    </section>
  ) 
}

export default SavedMoviesCardList;