import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

function Register(props) {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChange(evt) {
        evt.preventDefault();
        if (evt.target.name === "email") {
            setEmail(evt.target.value);
        } else if (evt.target.name === "password") {
            setPassword(evt.target.value);
        } else if (evt.target.name === "name") {
            setName(evt.target.value);
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onRegister({ name, email, password });
    }

    return (
        <main className="content">
            <section className="register">
              <div className="register__container">
                <div className="register__logo"></div>
              <h2 className="register__title">Добро пожаловать!</h2>
                <form name="register__form" onSubmit={handleSubmit} className="register__form">
                    <label className="register__label">Имя</label>
                    <input id="name" type="text" placeholder="" value={name} onChange={handleChange} name="name" className="register__input" minLength="2" maxLength="40" required />
                    <span className="name-input-error register__input-error"></span>
                    <label className="register__label">E-mail</label>
                    <input id="email" type="email" placeholder="" value={email} onChange={handleChange} name="email" className="register__input" minLength="2" maxLength="40" required />
                    <span className="email-input-error register__input-error"></span>
                    <label className="register__label">Пароль</label>
                    <input id="password" type="password" placeholder="" value={password} onChange={handleChange} name="password" className="register__input" minLength="2" maxLength="40" required />
                    <span className="password-input-error register__input-error"></span>
                    <button type="submit" className="register__save-btn">Зарегистрироваться</button>
                </form>
                <div className="register__signup">
                    <p className="register__text">Уже зарегистрированы?</p>
                    <Link to="/signin" className="register__link">Войти</Link>
                </div>
              </div>
            </section>
        </main>
    );
}

export default Register;