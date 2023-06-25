import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  isMovies,
  isLoading,
  isNotFound,
  isErrorFound,
  windowSize,
  movies,
  isSaved,
  location,
  handleDeleteMovie,
  handleSaveMovie,
  setWindowSize,
  isSavedMovies,
  savedMovies,
  setSavedMovies,
}) {
  const [cardLength, setCardLength] = useState(0);
  const [standartCardLength, setStandartCardLength] = useState({
    desktop: 12,
    tablet: 8,
    mobile: 5,
  });

  const openMoreCards = () => {
    if (windowSize.width > 1279) {
      setStandartCardLength({
        desktop: standartCardLength.desktop + 3,
        tablet: standartCardLength.desktop + 3,
        mobile: standartCardLength.desktop + 3,
      });
    } else if (windowSize.width > 479) {
      setStandartCardLength({
        desktop: standartCardLength.tablet + 2,
        tablet: standartCardLength.tablet + 2,
        mobile: standartCardLength.tablet + 2,
      });
    } else {
      setStandartCardLength({
        desktop: standartCardLength.mobile + 2,
        tablet: standartCardLength.mobile + 2,
        mobile: standartCardLength.mobile + 2,
      });
    }
  };

  useEffect(() => {
    if (windowSize.width > 1279) {
      setCardLength(standartCardLength.desktop);
    } else if (windowSize.width > 479) {
      setCardLength(standartCardLength.tablet);
    } else {
      setCardLength(standartCardLength.mobile);
    }
  }, [windowSize.width, standartCardLength]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="cards">
      <div className={`cards__list ${
        (((location.pathname === '/movies' && (isNotFound || isErrorFound))
        || (location.pathname === '/saved-movies' && isNotFound)
        ) && 'cards__list_error')
        || ''}`}
      >
        {isLoading && <Preloader />}
        {((isMovies && isNotFound && !isLoading && !isErrorFound)
        || (isSavedMovies && isNotFound && !isLoading))
        && 'Ничего не найдено'}
        {!isMovies && !isSavedMovies && isErrorFound && !isLoading
        && `Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз.`}
        {(isMovies && !isLoading && !isNotFound && !isErrorFound)
        || (isSavedMovies && !isLoading && !isNotFound)
          ? movies.slice(0, cardLength).map((el) => (
            <MoviesCard
              key={el.id || el._id}
              card={el}
              isSaved={isSaved}
              location={location}
              handleDeleteMovie={handleDeleteMovie}
              handleSaveMovie={handleSaveMovie}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}
            />
          )) : ''}
      </div>
      {((isMovies
      && !isLoading
      && (movies !== null)
      && (cardLength < movies.length)
      && !isErrorFound)
      || (isSavedMovies
      && !isLoading
      && (movies !== null)
      && (cardLength < movies.length))
      )
      && (
      <button type="button" className="cards__button" onClick={openMoreCards}>
        Еще
      </button>
      )}
    </section>
  );
}

MoviesCardList.propTypes = {
  isMovies: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  isNotFound: PropTypes.bool.isRequired,
  isErrorFound: PropTypes.bool.isRequired,
  windowSize: PropTypes.object.isRequired,
  movies: PropTypes.array,
  isSaved: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  handleDeleteMovie: PropTypes.func.isRequired,
  handleSaveMovie: PropTypes.func.isRequired,
  setWindowSize: PropTypes.func.isRequired,
  isSavedMovies: PropTypes.bool,
  savedMovies: PropTypes.array,
  setSavedMovies: PropTypes.func,
};

MoviesCardList.defaultProps = {
  movies: [],
  savedMovies: [],
  isSavedMovies: false,
  setSavedMovies: undefined,
  isMovies: false,
};

export default MoviesCardList;
