import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({
  handleSearchSubmit,
  isShortMovies,
  setIsShortMovies,
  inputValue,
  setInputValue,
  location,
}) {
  const [errorText, setErrorText] = useState('');

  const handleShortMovies = () => {
    setIsShortMovies(!isShortMovies);
    if (location.pathname === '/movies') {
      localStorage.setItem('isShortMovies', !isShortMovies);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/[a-zA-Z0-9а-яёА-ЯЁ]/gi.test(inputValue)) {
      setErrorText('Нужно ввести ключевое слово');
    } else {
      setErrorText('');
      handleSearchSubmit(inputValue, isShortMovies);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const valueInput = localStorage.getItem('inputValue');

    if (valueInput !== null
    && valueInput.length > 0
    && location.pathname === '/movies') {
      setInputValue(valueInput);
    } else {
      setInputValue('');
    }

    if (localStorage.getItem('isShortMovies') === 'true') {
      setIsShortMovies(true);
    } else {
      setIsShortMovies(false);
    }
  }, []);

  return (
    <section className="search">
      <form className="search-form" name="search-movies" onSubmit={handleSubmit}>
        <fieldset className="search-form__container">
          <input
            type="text"
            name="movie-search"
            id="movie-search"
            className={`search-form__input ${errorText.length > 1 ? 'search-form__input_error' : ''}`}
            placeholder="Фильм"
            required
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit" className="search-form__button">Найти</button>
        </fieldset>
        <FilterCheckbox handleShortMovies={handleShortMovies} isShortMovies={isShortMovies} />
      </form>
      <span className="search__error">{errorText}</span>
    </section>
  );
}

SearchForm.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
  isShortMovies: PropTypes.bool.isRequired,
  setIsShortMovies: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  setInputValue: PropTypes.func,
  location: PropTypes.object.isRequired,
};

SearchForm.defaultProps = {
  inputValue: undefined,
  setInputValue: undefined,
};

export default SearchForm;
