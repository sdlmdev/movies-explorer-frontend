import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/profile.svg';
import './Navigation.css';

function Navigation() {
  return (
    <div className="header-popup">
      <nav className="header-popup__list">
        <ul className="header-popup__items">
          <li>
            <Link to="/" className="header-popup__items_link">Главная</Link>
          </li>
          <li>
            <Link to="/movies" className="header-popup__items_link">Фильмы</Link>
          </li>
          <li>
            <Link to="/saved-movies" className="header-popup__items_link">Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link to="/profile" className="header__profile-link header-popup__profile-link" title="Редактировать профиль">
          <img src={profile} alt="Профиль" />
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
