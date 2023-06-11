import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MoviesCard.css';
import image from '../../images/pic__COLOR_pic.png';

function MoviesCard({ isSaved }) {
  const [isSavedMovie, setIsSavedMovie] = useState(false);
  const handleButtonClick = () => {
    setIsSavedMovie(!isSavedMovie);
  };

  return (
    <article className="card">
      <div className="card__text">
        <p className="card__name">33&nbsp;слова о&nbsp;дизайне</p>
        <p className="card__time">1ч&nbsp;47м</p>
      </div>
      {!isSaved ? (
        <button
          className={`card__save-box_button ${!isSavedMovie ? 'card__save-box_button-inactive' : ''}`}
          type="button"
          title="Сохранить фильм"
          aria-label="Сохранить фильм"
          onClick={handleButtonClick}
        />
      ) : (
        <button
          className="card__save-box_button card__save-box_button-delete"
          type="button"
          aria-label="Удалить фильм"
          title="Удалить фильм"
        />
      )}
      <img
        className="card__image"
        alt="Кадр из фильма"
        src={image}
      />
    </article>
  );
}

MoviesCard.propTypes = {
  isSaved: PropTypes.bool.isRequired,
};

export default MoviesCard;
