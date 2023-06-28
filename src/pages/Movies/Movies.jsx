import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { handleFilterMovies, filterShortMovies } from '../../utils/utils';

function Movies({
  isLoggedIn,
  isLoading,
  isErrorFound,
  isNotFound,
  isMovies,
  windowSize,
  setWindowSize,
  location,
  handleDeleteMovie,
  handleSaveMovie,
  savedMovies,
  setIsNotFound,
  isShortMovies,
  setIsShortMovies,
  allMovies,
}) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [inputValueMovies, setInputValueMovies] = useState('');
  const films = localStorage.getItem('filteredMovies');

  const handleSearchSubmit = (valueInput, isShort) => {
    localStorage.setItem('inputValue', valueInput);

    if (allMovies !== null && allMovies.length > 0) {
      const moviesList = handleFilterMovies(allMovies, isShort, valueInput);
      localStorage.setItem('filteredMovies', JSON.stringify(moviesList));
      setFilteredMovies(moviesList);
    }
  };

  useEffect(() => {
    if (isLoggedIn && films) {
      setFilteredMovies(JSON.parse(films));
    } else {
      setFilteredMovies([]);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn
    && (allMovies !== null && allMovies.length > 0)
    && (inputValueMovies !== null && inputValueMovies.length > 0)) {
      if (isShortMovies) {
        const shortMovies = handleFilterMovies(allMovies, isShortMovies, inputValueMovies);

        localStorage.setItem('inputValue', inputValueMovies);
        setFilteredMovies(filterShortMovies(shortMovies));

        if (shortMovies !== null && shortMovies.length > 0) {
          localStorage.setItem('filteredMovies', JSON.stringify(shortMovies));
        } else {
          localStorage.setItem('filteredMovies', '[]');
        }
      } else {
        setFilteredMovies(handleFilterMovies(allMovies, isShortMovies, inputValueMovies));
        localStorage.setItem(
          'filteredMovies',
          JSON.stringify(handleFilterMovies(allMovies, isShortMovies, inputValueMovies)),
        );
      }
    }
  }, [isLoggedIn, isShortMovies, allMovies]);

  useEffect(() => {
    if (filteredMovies.length === 0 && (inputValueMovies !== null && inputValueMovies.length > 0)) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  useEffect(() => () => {
    setFilteredMovies([]);
    setInputValueMovies('');
  }, []);

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
      />
      <main>
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          isShortMovies={isShortMovies}
          setIsShortMovies={setIsShortMovies}
          inputValue={inputValueMovies}
          setInputValue={setInputValueMovies}
          location={location}
        />
        <MoviesCardList
          isMovies={isMovies}
          isLoading={isLoading}
          isNotFound={isNotFound}
          isErrorFound={isErrorFound}
          windowSize={windowSize}
          movies={filteredMovies}
          isSaved={false}
          location={location}
          handleDeleteMovie={handleDeleteMovie}
          handleSaveMovie={handleSaveMovie}
          savedMovies={savedMovies}
          setWindowSize={setWindowSize}
        />
      </main>
      <Footer />
    </>
  );
}

Movies.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isErrorFound: PropTypes.bool.isRequired,
  isNotFound: PropTypes.bool.isRequired,
  isMovies: PropTypes.bool.isRequired,
  windowSize: PropTypes.object.isRequired,
  setWindowSize: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  handleDeleteMovie: PropTypes.func.isRequired,
  handleSaveMovie: PropTypes.func.isRequired,
  savedMovies: PropTypes.array,
  setIsNotFound: PropTypes.func.isRequired,
  isShortMovies: PropTypes.bool.isRequired,
  setIsShortMovies: PropTypes.func.isRequired,
  allMovies: PropTypes.array,
};

Movies.defaultProps = {
  allMovies: [],
  savedMovies: [],
};

export default Movies;
