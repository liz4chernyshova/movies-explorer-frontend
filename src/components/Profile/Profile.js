import React from 'react';
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from 'react-router-dom';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import Preloader from "../Preloader/Preloader";
import { useFormWithValidation } from '../../utils/validator';

function Profile({ loggedIn, onSignOut, onUpdateUser, serverResponse, isActive }) {
  const { values, setValues, handleChange, errors, isValid } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [isDisable, setIsDisable] = React.useState(false);

  React.useEffect(() => {
      setValues(currentUser);
  }, [currentUser, setValues]);

  const checkValuesInput = () => currentUser.name !== values.name || currentUser.email !== values.email;

  function handleSubmit(evt) {
      const { name, email } = values;

      evt.preventDefault();
      onUpdateUser(name, email);
      setIsDisable(false);
  }

  return (
    <>
    <HeaderMovies loggedIn={loggedIn}/>
      <main className="content">
        <section className="profile">
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form className="profile__form"  noValidate onSubmit={handleSubmit} >
          <div className="profile__form-input">
            <p className="profile__label">Имя</p>
            <input value={values.name || ""} onChange={handleChange} type="text" name="name" className="profile__input" required minLength="2" maxLength="30" />
          </div>
          <span className="profile__input-error">{errors.name}</span>
          <div className="profile__form-input">
            <p className="profile__label">Email</p>
            <input value={values.email || ""} onChange={handleChange} className="profile__input" type="email" name="email" />                  
          </div>
          <span className="profile__input-error">{errors.email}</span>
            <div className="profile__edit">
            <p className="profile__input-error">{serverResponse.message}</p>
            { !checkValuesInput() || isDisable
              ? <button type="submit" className="profile__link" disabled={!isValid} >Редактировать</button>
              : <button type="submit" className="profile__link" >{isActive ? <Preloader isActive={isActive} isAuth={true} /> : 'Редактировать'}</button> }
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