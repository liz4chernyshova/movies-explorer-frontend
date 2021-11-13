import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChange(evt) {
        evt.preventDefault();
        if (evt.target.name === "email") {
            setEmail(evt.target.value);
        } else if (evt.target.name === "password") {
            setPassword(evt.target.value);
        } 
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onRegister(email, password);
    }

    return (
        <main className="content">
            <section className="register">
              <div className="register__container">
                <div className="register__logo"></div>
                <h2 className="register__title">Рады видеть!</h2>
                    <form name="register__form" onSubmit={handleSubmit} className="register__form">
                        <label className="register__label">E-mail</label>
                        <input id="email" type="email" value={email} onChange={handleChange} name="email" className="register__input" required />
                        <span className="email-input-error register__input-error"></span>
                        <label className="register__label">Пароль</label>
                        <input id="password" type="password" value={password} onChange={handleChange} name="password" className="register__input" required />
                        <span className="password-input-error register__input-error"></span>
                        <button type="submit" className="register__save-btn">Войти</button>
                    </form>
                    <div className="register__signup">
                        <p className="register__text">Еще не зарегистрированы?</p>
                        <Link to="/signup" className="register__link">Регистрация</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;