import React from 'react';
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from 'react-router-dom';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import Preloader from "../Preloader/Preloader";
import { useFormWithValidation } from '../../utils/validator';

function Profile({ loggedIn, onSignOut, onUpdateUser, isActive }) {
  const { values, setValues, handleChange, errors, isValid } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
      setValues(currentUser);
  }, [currentUser, setValues]);

  function handleSubmit(evt) {
      const { name, email } = values;

      evt.preventDefault();
      onUpdateUser(name, email);
  }

  return (
    <>
    <HeaderMovies loggedIn={loggedIn}/>
      <main className="content">
        <section className="profile">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form className="profile__form"  noValidate onSubmit={handleSubmit} >
              <label className="profile__label profile__label_type_name" htmlFor="name">Имя
                <input  placeholder={values.name} onChange={handleChange} type="text" className="profile__input" name="name" id="name" minLength="2" maxLength="40" required/>
              </label>
              <span className="name-input-error profile__input-error">{errors.name}</span>
              <label className="profile__label" htmlFor="email">E-mail
                <input0 placeholder={values.email} onChange={handleChange} type="email" className="profile__input" name="email" id="email" required/>
              </label>
              <span className="password-input-error profile__input-error">{errors.email}</span>
              <div className="profile__edit">
                      <Link to="/signin" className="profile__link" disabled={!isValid}>{isActive ? <Preloader isActive={isActive} isAuth={true} /> : 'Редактировать'}</Link>
              </div>
              <div className="profile__signout">
                      <Link to="/" className="profile__link-signout" onClick={onSignOut}>Выйти из аккаунта</Link>
              </div>
        </form>
        </section>
      </main>
    </>
      
    )
  }
  
export default Profile;