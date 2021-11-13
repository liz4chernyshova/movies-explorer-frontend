import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import dataFilmList from '../dataFilmList';

function MoviesCardList(props) {
  function handleClick() {

  }
  return (
    <section className="cards"> 
      <div className="cards__conteiner">
        {dataFilmList.map((card) => (
          <MoviesCard card={card} key={card.name}/>
        ))}
      </div>
      <div className="cards__next">
        <button className="cards__button">Ещё</button>  
      </div>
    </section>
  ) 
}

export default MoviesCardList;