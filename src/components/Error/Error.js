import React from 'react';
import './Error.css';
import { useHistory } from "react-router-dom";

function Error({ loggedIn}) {

  const history = useHistory();

  function handleClick() {
    if (loggedIn) {
      history.goBack();
    } else {
      history.push("/");
    }
  }
  
  return (
    <div className="profile__error">
        <p className="profile__error-code">404</p> 
        <p className="profile__error-text">Страница не найдена</p>
        <button className="profile__error-button" onClick={handleClick}>Назад</button>
   </div>
  )
}

export default Error;