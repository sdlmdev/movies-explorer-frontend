import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import {
  DEVICE_PARAMS,
  NOT_FOUND_ERROR_MESSAGE,
  REQUEST_ERROR_MESSAGE,
} from '../../utils/constants';

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
    desktop: DEVICE_PARAMS.desktop.movies.total,
    tablet: DEVICE_PARAMS.tablet.movies.total,
    mobile: DEVICE_PARAMS.mobile.movies.total,
  });

  const openMoreCards = () => {
    if (windowSize.width > DEVICE_PARAMS.desktop.width) {
      setStandartCardLength({
        desktop: standartCardLength.desktop
        + DEVICE_PARAMS.desktop.movies.more,
        tablet: standartCardLength.desktop
        + DEVICE_PARAMS.desktop.movies.more,
        mobile: standartCardLength.desktop
        + DEVICE_PARAMS.desktop.movies.more,
      });
    } else if (windowSize.width > DEVICE_PARAMS.tablet.width) {
      setStandartCardLength({
        desktop: standartCardLength.tablet
        + DEVICE_PARAMS.tablet.movies.more,
        tablet: standartCardLength.tablet
        + DEVICE_PARAMS.tablet.movies.more,
        mobile: standartCardLength.tablet
        + DEVICE_PARAMS.tablet.movies.more,
      });
    } else {
      setStandartCardLength({
        desktop: standartCardLength.mobile
        + DEVICE_PARAMS.mobile.movies.more,
        tablet: standartCardLength.mobile
        + DEVICE_PARAMS.mobile.movies.more,
        mobile: standartCardLength.mobile
        + DEVICE_PARAMS.mobile.movies.more,
      });
    }
  };

  useEffect(() => {
    if (windowSize.width > DEVICE_PARAMS.desktop.width) {
      setCardLength(standartCardLength.desktop);
    } else if (windowSize.width > DEVICE_PARAMS.tablet.width) {
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
        && NOT_FOUND_ERROR_MESSAGE}
        {!isMovies && !isSavedMovies && isErrorFound && !isLoading
        && REQUEST_ERROR_MESSAGE}
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
