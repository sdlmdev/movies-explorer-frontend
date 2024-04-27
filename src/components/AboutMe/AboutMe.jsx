import React from 'react';
import student from '../../images/student.jpg';
import './AboutMe.css';

function AboutMe() {
  function getAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age -= 1;
    }

    return age;
  }

  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <article className="about-me__content">
          <h3 className="about-me__content_title">Михаил</h3>
          <h4 className="about-me__content_subtitle">
            {`Фронтенд-разработчик, ${getAge('1997-10-03')} лет`}
          </h4>
          <p className="about-me__content_text">
            Развиваюсь в&nbsp;веб-разработке, люблю решать алгоритмические
            задачи и&nbsp;читать книги. Умею работать в&nbsp;команде, эффективно
            коммуницировать и&nbsp;сотрудничать с&nbsp;другими людьми. Стремлюсь
            к&nbsp;саморазвитию и&nbsp;изучению новых технологий, чтобы
            оставаться в&nbsp;курсе последних трендов и&nbsp;лучших практик
            в&nbsp;веб-разработке. Стараюсь придерживаться высоких стандартов
            качества в&nbsp;своей работе, с&nbsp;акцентом на&nbsp;чистоту кода,
            масштабируемость и&nbsp;повторное использование. Готов принять новые
            вызовы и&nbsp;внести вклад в команду разработки, чтобы создавать
            качественные веб-приложения для пользователей.
          </p>
          <a
            href="https://github.com/sdlmdev"
            target="_blank"
            rel="noopener noreferrer"
            className="about-me__link"
          >
            Github
          </a>
        </article>
        <img src={student} alt="Студент" className="about-me__image" />
      </div>
    </section>
  );
}

export default AboutMe;
