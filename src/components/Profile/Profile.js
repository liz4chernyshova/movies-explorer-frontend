import React from 'react';
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from 'react-router-dom';
import HeaderMovies from '../HeaderMovies/HeaderMovies';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);


  /*function handleSubmit(evt) {
    evt.preventDefault();
    props.onEditProfile();
  }*/
 
  return (
    <>
    <HeaderMovies loggedIn={props.loggedIn}/>
      <main className="content">
        <section className="profile">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form className="profile__form" >
              <label className="profile__label profile__label_type_name" htmlFor="name">Имя
                <input  placeholder={currentUser.name} type="text" className="profile__input" name="name" id="name" minLength="2" maxLength="40" required/>
              </label>
              <span className="name-input-error profile__input-error"></span>
              <label className="profile__label" htmlFor="email">E-mail
                <input type="email"  placeholder={currentUser.email} className="profile__input" name="email" id="email" required/>
              </label>
              <span className="password-input-error profile__input-error"></span>
              <div className="profile__edit">
                      <Link to="/signin" className="profile__link">Редактировать</Link>
              </div>
              <div className="profile__signout">
                      <Link to="/" className="profile__link-signout" onClick={props.onSignOut}>Выйти из аккаунта</Link>
              </div>
        </form>
        </section>
      </main>
    </>
      
    )
  }
  
export default Profile;