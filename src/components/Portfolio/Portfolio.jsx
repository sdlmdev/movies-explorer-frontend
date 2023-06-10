import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list_item">
          <a href="https://github.com/sdlmdev/how-to-learn" target="_blank" rel="noopener noreferrer" className="portfolio__link">
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__list_item">
          <a href="https://github.com/sdlmdev/russian-travel" target="_blank" rel="noopener noreferrer" className="portfolio__link">
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__list_item">
          <a href="https://github.com/sdlmdev/react-mesto-auth" target="_blank" rel="noopener noreferrer" className="portfolio__link">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
