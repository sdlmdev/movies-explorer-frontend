import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MoviesCard.css';
import { timeConverter } from '../../utils/utils';

function MoviesCard({
  card,
  isSaved,
  location,
  handleDeleteMovie,
  handleSaveMovie,
  savedMovies,
}) {
  const [isSavedMovie, setIsSavedMovie] = useState(false);

  const checkMovie = () => savedMovies.find((i) => (i.movieId === card.id));

  const onAddMovie = () => {
    handleSaveMovie(card);
    setIsSavedMovie(true);
  };

  const onDeleteMovie = () => {
    const thisMovie = checkMovie();

    if (thisMovie) {
      handleDeleteMovie(thisMovie);
      setIsSavedMovie(false);
    }
  };

  const onDeleteMyMovie = () => {
    handleDeleteMovie(card);
  };

  const searchMyMovie = () => {
    const myMovie = checkMovie();
    if (myMovie) {
      setIsSavedMovie(true);
    } else {
      setIsSavedMovie(false);
    }
  };

  useEffect(() => {
    searchMyMovie();
  }, []);

  return (
    <article className="card">
      <div className="card__text">
        <p className="card__name" title={card.nameRU}>{card.nameRU}</p>
        <p className="card__time">{timeConverter(card.duration)}</p>
      </div>
      {!isSaved ? (
        <button
          className={`card__save-box_button ${!isSavedMovie ? 'card__save-box_button-inactive' : ''}`}
          type="button"
          title="Сохранить фильм"
          aria-label="Сохранить фильм"
          onClick={isSavedMovie ? onDeleteMovie : onAddMovie}
        />
      ) : (
        <button
          className="card__save-box_button card__save-box_button-delete"
          type="button"
          aria-label="Удалить фильм"
          title="Удалить фильм"
          onClick={onDeleteMyMovie}
        />
      )}
      <a href={card.trailerLink} target="_blank" rel="noopener noreferrer" className="card__link">
        <img
          className="card__image"
          alt="Кадр из фильма"
          src={location.pathname === '/saved-movies' ? card.image : `https://api.nomoreparties.co/${card.image.url}`}
        />
      </a>
    </article>
  );
}

MoviesCard.propTypes = {
  isSaved: PropTypes.bool.isRequired,
  card: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  handleDeleteMovie: PropTypes.func.isRequired,
  handleSaveMovie: PropTypes.func.isRequired,
  savedMovies: PropTypes.array,
};

MoviesCard.defaultProps = {
  savedMovies: [],
};

export default MoviesCard;
