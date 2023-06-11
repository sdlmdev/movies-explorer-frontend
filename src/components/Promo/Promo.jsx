import React from 'react';
import { Link } from 'react-scroll';
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <nav>
        <ul className="promo__links">
          <li className="promo__links_item">
            <Link to="about-project" className="promo__link">О&nbsp;проекте</Link>
          </li>
          <li className="promo__links_item">
            <Link to="techs" className="promo__link">Технологии</Link>
          </li>
          <li className="promo__links_item">
            <Link to="about-me" className="promo__link">Студент</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Promo;
