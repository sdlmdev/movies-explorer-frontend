import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchForm from '../../components/SearchForm/SearchForm';
import { handleFilterMovies, filterShortMovies } from '../../utils/utils';

function SavedMovies({
  isLoggedIn,
  setIsLoading,
  isLoading,
  isNotFound,
  setIsNotFound,
  isErrorFound,
  windowSize,
  setWindowSize,
  location,
  handleDeleteMovie,
  handleSaveMovie,
  isSavedMovies,
  savedMovies,
  setSavedMovies,
  isChangeSavedCards,
  isShortMovies,
  setIsShortMovies,
  inputValue,
  setInputValue,
}) {
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  const handleSearchSubmit = (valueInput, isShort) => {
    setIsLoading(true);
    try {
      setInputValue(valueInput);
      const newFilteredMovies = handleFilterMovies(savedMovies, isShort, valueInput);
      setFilteredSavedMovies(newFilteredMovies);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsShortMovies(false);
  }, []);

  useEffect(() => {
    if (savedMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setFilteredSavedMovies(savedMovies);
      setIsNotFound(false);
    }
  }, [savedMovies, isChangeSavedCards]);

  useEffect(() => {
    if (savedMovies.length > 0 && inputValue) {
      if (isShortMovies) {
        const shortMovies = handleFilterMovies(savedMovies, isShortMovies, inputValue);

        setFilteredSavedMovies(filterShortMovies(shortMovies));
      } else {
        setFilteredSavedMovies(handleFilterMovies(savedMovies, isShortMovies, inputValue));
      }
    }
    if (savedMovies.length > 0 && !inputValue) {
      if (isShortMovies) {
        setFilteredSavedMovies(filterShortMovies(savedMovies));
      } else {
        setFilteredSavedMovies(savedMovies);
      }
    }
  }, [isShortMovies]);

  useEffect(() => {
    if (filteredSavedMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredSavedMovies]);

  useEffect(() => {
    if (!isLoggedIn) {
      setFilteredSavedMovies([]);
    }
  }, [isLoggedIn]);

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
          inputValue={inputValue}
          setInputValue={setInputValue}
          location={location}
        />
        <MoviesCardList
          movies={filteredSavedMovies}
          isSaved
          isLoading={isLoading}
          isNotFound={isNotFound}
          isErrorFound={isErrorFound}
          windowSize={windowSize}
          location={location}
          handleDeleteMovie={handleDeleteMovie}
          handleSaveMovie={handleSaveMovie}
          setWindowSize={setWindowSize}
          isSavedMovies={isSavedMovies}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
        />
      </main>
      <Footer />
    </>
  );
}

SavedMovies.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isNotFound: PropTypes.bool.isRequired,
  setIsNotFound: PropTypes.func.isRequired,
  isErrorFound: PropTypes.bool.isRequired,
  windowSize: PropTypes.object.isRequired,
  setWindowSize: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  handleDeleteMovie: PropTypes.func.isRequired,
  handleSaveMovie: PropTypes.func.isRequired,
  isSavedMovies: PropTypes.bool.isRequired,
  savedMovies: PropTypes.array.isRequired,
  setSavedMovies: PropTypes.func,
  isChangeSavedCards: PropTypes.bool.isRequired,
  isShortMovies: PropTypes.bool.isRequired,
  setIsShortMovies: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func.isRequired,
};

SavedMovies.defaultProps = {
  setSavedMovies: undefined,
  inputValue: undefined,
};

export default SavedMovies;
