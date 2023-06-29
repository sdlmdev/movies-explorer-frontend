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
  isShortMovies,
  setIsShortMovies,
}) {
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [inputValueSavedMovies, setInputValueSavedMovies] = useState('');

  const handleSearchSubmit = (valueInput, isShort) => {
    setIsLoading(true);
    try {
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
  }, [savedMovies]);

  useEffect(() => {
    if (savedMovies.length > 0 && inputValueSavedMovies && inputValueSavedMovies.length > 0) {
      if (isShortMovies) {
        const shortMovies = handleFilterMovies(savedMovies, isShortMovies, inputValueSavedMovies);

        setFilteredSavedMovies(filterShortMovies(shortMovies));
      } else {
        setFilteredSavedMovies(handleFilterMovies(
          savedMovies,
          isShortMovies,
          inputValueSavedMovies,
        ));
      }
    }
    if (savedMovies.length > 0 && !inputValueSavedMovies) {
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

  useEffect(() => () => {
    setFilteredSavedMovies([]);
    setInputValueSavedMovies('');
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
          inputValue={inputValueSavedMovies}
          setInputValue={setInputValueSavedMovies}
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
  isShortMovies: PropTypes.bool.isRequired,
  setIsShortMovies: PropTypes.func.isRequired,
};

SavedMovies.defaultProps = {
  setSavedMovies: undefined,
};

export default SavedMovies;
