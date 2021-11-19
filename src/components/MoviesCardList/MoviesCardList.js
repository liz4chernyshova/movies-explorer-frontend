import { React, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import dataFilmList from '../dataFilmList';



function MoviesCardList(props) {

  const [countOfMovies, setCountOfMovies] = useState([]);

  const addMovies = () => {
    const dataFilmListCount = dataFilmList.slice(0, countOfMovies.length + 3);
    setCountOfMovies(dataFilmListCount);
  }

  return (
    <section className="cards"> 
      <div className="cards__conteiner">
        {countOfMovies.map((card) => (
          <MoviesCard card={card} key={card.name}/>
        ))}
      </div>
      <div className="cards__next">
      {
        (dataFilmList.length && (countOfMovies.length !== dataFilmList.length )) ? (
          <button className="cards__add-button" onClick={addMovies}>Еще</button>
          ) : null
      }
      </div>
    </section>
  ) 
}

export default MoviesCardList;