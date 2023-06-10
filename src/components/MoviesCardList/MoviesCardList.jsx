import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  const location = useLocation();
  const numberCards = location.pathname === '/saved-movies' ? { length: 3 } : { length: 12 };
  const cards = Array.from(numberCards, (_, index) => (
    location.pathname === '/saved-movies' ? <MoviesCard key={index} isSaved />
      : <MoviesCard key={index} isSaved={false} />
  ));

  return (
    <section className="cards">
      <div className="cards__list">
        {cards}
      </div>
      {location.pathname === '/movies' && (<button type="button" className="cards__button">Еще</button>)}
    </section>
  );
}

export default MoviesCardList;
