import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.svg';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMenu();
    }
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo logo" title="На главную">
          <img src={logo} alt="На главную" />
        </Link>
        {isLoggedIn === false ? (
          <nav>
            <ul className="header__list">
              <li>
                <Link to="/signup" className="header__list_link">Регистрация</Link>
              </li>
              <li>
                <Link to="/signin" className="header__list_link header__list_login">Войти</Link>
              </li>
            </ul>
          </nav>
        ) : (
          <>
            <nav>
              <ul className="header__list-movies_items">
                <li>
                  <Link to="/movies" className="header__list-movies_link">Фильмы</Link>
                </li>
                <li>
                  <Link to="/saved-movies" className="header__list-movies_link">Сохранённые фильмы</Link>
                </li>
              </ul>
            </nav>
            <Link to="/profile" className="header__profile-link" title="Редактировать профиль">
              <img src={profile} alt="Профиль" />
            </Link>
            <div
              className={`header__burger ${isPopupOpen ? 'header__burger_open' : ''}`}
              onClick={toggleMenu}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="button"
            >
              <span className="header__burger_line" />
              <span className="header__burger_line" />
              <span className="header__burger_line" />
            </div>
          </>
        )}
      </header>
      {isPopupOpen && (
        <Navigation />
      )}
    </>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;
