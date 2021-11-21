import React from 'react';
import './Promo.css';
import promo from '../../images/promo_banner.svg'

function Promo(props) {
  return (
    <section className="promo">
      <article className="promo__banner">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__image" src={promo} alt="Логотип страницы"/>
      </article>
    </section>
  );
}

export default Promo;