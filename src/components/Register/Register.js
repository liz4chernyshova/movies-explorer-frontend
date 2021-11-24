import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/validator';
import Preloader from '../Preloader/Preloader';

function Register({ onRegister, serverResponse, isActive }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(evt) {
      const { name, email, password } = values;

      evt.preventDefault();
      onRegister(name, email, password);
      resetForm({}, {}, false);
  }

    return (
        <>
            <section className="register">
              <div className="register__container">
                <div className="register__logo"></div>
              <h2 className="register__title">Добро пожаловать!</h2>
                <form name="register__form" onSubmit={handleSubmit} className="register__form">
                    <label className="register__label">Имя</label>
                    <input id="name" type="text" placeholder="" value={values.name || ''} onChange={handleChange} name="name" className="register__input" pattern="^[A-Za-zА-ЯЁа-яё]+$" minLength="2" maxLength="40" required />
                    <span className="name-input-error register__input-error">{errors.name}</span>
                    <label className="register__label">E-mail</label>
                    <input id="email" type="email" placeholder="" value={values.email || ''} onChange={handleChange} name="email" className="register__input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" minLength="2" maxLength="40" required />
                    <span className="email-input-error register__input-error">{errors.email}</span>
                    <label className="register__label">Пароль</label>
                    <input id="password" type="password" placeholder="" value={values.password || ''} onChange={handleChange} name="password" className="register__input" minLength="2" maxLength="40" required />
                    <span className="password-input-error register__input-error">{errors.password}</span>
                    <button type="submit" className="register__save-btn" >{isActive ? <Preloader isActive={isActive} isAuth={true} /> : "Зарегистрироваться"}</button>
                </form>
                <p className="register__submit-error">{serverResponse}</p>
                <div className="register__signup">
                    <p className="register__text">Уже зарегистрированы?</p>
                    <Link to="/signin" className="register__link">Войти</Link>
                </div>
              </div>
            </section>
        </>
    );
}

export default Register;