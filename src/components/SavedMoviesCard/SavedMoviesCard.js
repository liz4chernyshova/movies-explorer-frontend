import React from 'react';
import '../MoviesCard/MoviesCard.css';


function SavedMoviesCard(props) {

   
    return (
        <div className="card">
          <div className="card__info">
            <h2 className="card__title">{props.card.name}</h2>
            <p className="card__time">{props.card.time}</p>
            <button className='card__button_type_delete'></button>
          </div>
          <img className="card__image" src={props.card.img} alt={props.card.name} />
        </div>
    )
}

export default SavedMoviesCard;