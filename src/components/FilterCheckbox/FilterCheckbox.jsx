import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter">
      <label htmlFor="checkbox" className="filter__switch">
        Короткометражки
        <input type="checkbox" id="checkbox" className="filter__checkbox" />
        <span className="filter__checkbox-slider" />
      </label>
    </div>
  );
}

export default FilterCheckbox;
