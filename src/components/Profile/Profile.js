import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile(props) {
  const [isDisabled, setIsDisabled] = React.useState(true)
  const [name, setName] = React.useState('');
  const [email, setEmail ] = React.useState('')

  function handleChangeName(e) {
    setName(e.target.value);
  }
    
  function handleChangeEmail (e) {
    setEmail(e.target.value);
  }

  function handleEditProfile() {
    setIsDisabled(false)
  }

  function handleSaveProfile() {
    setIsDisabled(true)
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
 
  return (
    <main className="content">
      <section className="profile">
      <h2 className="profile__title">{`Привет, ${props.name}!`}</h2>
      <form className="profile__form" onSubmit={handleSubmit} >
            <label className="profile__label" htmlFor="name">Имя</label>
            <input disabled={isDisabled} value={name} onChange={handleChangeName} placeholder={props.name} type="text" className="profile__input" name="name" id="name" minLength="2" maxLength="40" required/>
            <span className="name-input-error profile__input-error"></span>
            <label className="profile__label" htmlFor="email">E-mail</label>
            <input disabled={isDisabled} type="email" value={email} onChange={handleChangeEmail} placeholder={props.email} className="profile__input" name="email" id="email" required/>
            <span className="password-input-error profile__input-error"></span>
            <div className="profile__edit">
                    <Link to="/sign-in" className="profile__link">Редактировать</Link>
            </div>
            <div className="profile__signout">
                    <Link to="/sign-in" className="profile__link-signout">Выйти из аккаунта</Link>
            </div>
      </form>
      </section>
    </main>
      
    )
  }
  
export default Profile;