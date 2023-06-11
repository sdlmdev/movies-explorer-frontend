import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <form className="search-form" name="search-movies">
        <fieldset className="search-form__container">
          <input
            type="text"
            name="movie-search"
            id="movie-search"
            className="search-form__input"
            placeholder="Фильм"
            required
          />
          <button type="submit" className="search-form__button">Найти</button>
        </fieldset>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
