import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О&nbsp;проекте</h2>
      <div className="about-project__content">
        <h3 className="about-project__content_title">Дипломный проект включал 5&nbsp;этапов</h3>
        <p className="about-project__content_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        <h3 className="about-project__content_title">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
        <p className="about-project__content_text">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__duration">
        <span className="about-project__duration_title">1&nbsp;неделя</span>
        <span className="about-project__duration_title about-project__duration_title-front">4&nbsp;недели</span>
        <span className="about-project__duration_text">Back-end</span>
        <span className="about-project__duration_text">Front-end</span>
      </div>
    </section>
  );
}

export default AboutProject;
