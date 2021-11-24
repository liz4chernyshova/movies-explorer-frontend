import React from 'react';
import './MoviesCard.css';
export const MOVIES_IMAGE_URL = 'https://api.nomoreparties.co';


function MoviesCard({movie, saved, onMovieSave, onMovieDelete}) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isBtnDelete, setisBtnDelete] = React.useState(false);

  const cardLikeButtonClassName = (
    `card__button_type_like ${isLiked ? 'card__button_type_like_active' : 'card__button_type_like_unactive'}`
  );
  const savedMovie = JSON.parse(localStorage.getItem('savedMovies')).find((item) => item.nameRU === movie.nameRU);

  function handleMouseEnter() {
    setisBtnDelete(true);
  }

  function handleMouseLeave() {
    setisBtnDelete(false);
  }

  function handleMovieDeleteClick() {
    if(saved) {
      onMovieDelete(movie._id);
    } else {
      onMovieDelete(savedMovie._id);
      setIsLiked(false);
    }
  }

  function handleLikeClick() {
    if(isLiked) {
      handleMovieDeleteClick();
    } else {
      onMovieSave(movie);
      setIsLiked(!isLiked);
    }
  }

  React.useEffect(() => {
    savedMovie ? setIsLiked(true) :setIsLiked(false);
  }, [savedMovie]);

  return (
      <div className="card">
        <div className="card__info" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <article className="card__text">
            <h2 className="card__title">{movie.nameRU}</h2>
            <p className="card__time">{movie.duration}</p>
          </article>
          <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        </div>
        <a className="moviecard__link" href={movie.trailerLink} target="_blank" rel="noreferrer"> 
          <img className="card__image" src={`${MOVIES_IMAGE_URL}${movie.image.url}`} alt={movie.nameRU} />
        </a>
      </div>
  )
}

export default MoviesCard;