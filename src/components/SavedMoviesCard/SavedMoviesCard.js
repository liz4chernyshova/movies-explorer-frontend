import React from 'react';
import '../MoviesCard/MoviesCard.css';
import { useLocation } from 'react-router-dom';


function SavedMoviesCard(props) {

    const location = useLocation();
    const [isSave, setIsSave] = React.useState(false);
  
    /*const cardLikeButton = (
      `card__button_type_like ${isLiked ? 'card__button_type_like_active' : 'card__button_type_like'}`
    );
  
    function handleLikeClick() {
      props.onCardLike(props.card)
    }
  
  
    function handleSaveClick() {
      setIsSave(true);
    }*/
  
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