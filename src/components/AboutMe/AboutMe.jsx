import React from 'react';
import student from '../../images/student.png';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <article className="about-me__content">
          <h3 className="about-me__content_title">Виталий</h3>
          <h4 className="about-me__content_subtitle">Фронтенд-разработчик, 30&nbsp;лет</h4>
          <p className="about-me__content_text">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ.
            У&nbsp;меня есть жена и&nbsp;дочь.
            Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
            С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
            После того, как прошёл курс по&nbsp;веб-разработке,
            начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <a href="https://github.com/sdlmdev" target="_blank" rel="noopener noreferrer" className="about-me__link">Github</a>
        </article>
        <img src={student} alt="Студент" className="about-me__image" />
      </div>
    </section>
  );
}

export default AboutMe;
