import React from 'react';
import './MoviesCard.css';


function MoviesCard(props) {

  const [isLiked, setIsLike] = React.useState(false);

  function handleLikeClick() {
    setIsLike(true);
  }

  const cardLikeButtonClassName = (
    `card__button_type_like ${isLiked ? 'card__button_type_like_active' : 'card__button_type_like_unactive'}`
  );

  return (
      <div className="card">
        <div className="card__info">
          <article className="card__text">
            <h2 className="card__title">{props.card.name}</h2>
            <p className="card__time">{props.card.time}</p>
          </article>
          <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
        </div>
        <img className="card__image" src={props.card.img} alt={props.card.name} />
      </div>
  )
}

export default MoviesCard;