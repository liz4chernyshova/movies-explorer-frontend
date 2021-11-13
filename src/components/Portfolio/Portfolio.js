import React from 'react';
import './Portfolio.css';
import pointer from '../../images/pointer.svg';

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__subtitle" href="https://github.com/liz4chernyshova/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт
            <img className="portfolio__icon" src={pointer} alt="ссылка" />
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__subtitle" href="https://github.com/liz4chernyshova/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт
            <img className="portfolio__icon" src={pointer} alt="ссылка" />
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__subtitle" href="https://github.com/liz4chernyshova/mesto-react" target="_blank" rel="noreferrer">Одностраничное приложение
            <img className="portfolio__icon" src={pointer} alt="ссылка" />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;