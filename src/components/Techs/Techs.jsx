import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__content">
        <h3 className="techs__content_title">7&nbsp;технологий</h3>
        <p className="techs__content_text">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__list_item">
            <p className="techs__list_text">HTML</p>
          </li>
          <li className="techs__list_item">
            <p className="techs__list_text">CSS</p>
          </li>
          <li className="techs__list_item">
            <p className="techs__list_text">JS</p>
          </li>
          <li className="techs__list_item">
            <p className="techs__list_text">React</p>
          </li>
          <li className="techs__list_item">
            <p className="techs__list_text">Git</p>
          </li>
          <li className="techs__list_item">
            <p className="techs__list_text">Express.js</p>
          </li>
          <li className="techs__list_item">
            <p className="techs__list_text">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
