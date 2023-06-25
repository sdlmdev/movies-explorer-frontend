import React from 'react';
import PropTypes from 'prop-types';
import './FilterCheckbox.css';

function FilterCheckbox({ handleShortMovies, isShortMovies }) {
  return (
    <div className="filter">
      <label htmlFor="checkbox" className="filter__switch">
        Короткометражки
        <input
          type="checkbox"
          id="checkbox"
          className="filter__checkbox"
          onChange={handleShortMovies}
          checked={isShortMovies}
        />
        <span className="filter__checkbox-slider" />
      </label>
    </div>
  );
}

FilterCheckbox.propTypes = {
  handleShortMovies: PropTypes.func.isRequired,
  isShortMovies: PropTypes.bool.isRequired,
};

export default FilterCheckbox;
