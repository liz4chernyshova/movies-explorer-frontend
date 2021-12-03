import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/validator';
import Preloader from "../Preloader/Preloader";

function Login({ onLogin, serverResponse, isActive }) {
    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    function handleSubmit(evt) {
        const { email, password } = values;

        evt.preventDefault();
        onLogin(email, password);
        resetForm({}, {}, false);
    }

    return (
        <main className="content">
            <section className="register">
              <div className="register__container">
                <div className="register__logo"></div>
                <h2 className="register__title">Рады видеть!</h2>
                    <form name="register__form" onSubmit={handleSubmit} className="register__form">
                        <label className="register__label">E-mail</label>
                        <input id="email" type="email" value={values.email} onChange={handleChange} name="email" className="register__input" required />
                        <span className="email-input-error register__input-error">{errors.email}</span>
                        <label className="register__label">Пароль</label>
                        <input id="password" type="password" value={values.password} onChange={handleChange} name="password" className="register__input" required />
                        <span className="password-input-error register__input-error">{errors.password}</span>
                        <p className="login__submit-error">{serverResponse}</p>
                        <button type="submit" className="register__save-btn" >
                            {isActive ? <Preloader isActive={isActive} isAuth={true} disabled={!isValid}/> : "Войти"}
                        </button>
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