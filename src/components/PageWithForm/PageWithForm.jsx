import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PageWithForm.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import logo from '../../images/logo.svg';

function PageWithForm({
  name,
  buttonText,
  title,
  registerStatus,
  linkText,
  link,
  errorClass,
  onSubmit,
  registrationStatus,
  loginStatus,
  location,
  isLoading,
}) {
  const {
    handleChange,
    values,
    errors,
    isValid,
    isValidEmailInput,
    isValidNameInput,
  } = useFormWithValidation();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    onSubmit(
      values.email,
      values.password,
    );
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    onSubmit(
      values.name,
      values.email,
      values.password,
    );
  };

  return (
    <section className="form">
      <Link to="/" className="logo" title="На главную">
        <img src={logo} alt="На главную" />
      </Link>
      <h2 className="form__title">{title}</h2>
      <form
        name={name}
        noValidate
        className="form__container"
        onSubmit={location.pathname === '/signup' ? handleSubmitRegister : handleSubmitLogin}
      >
        <fieldset className="form__set">
          {location.pathname === '/signup' && (
            <label htmlFor="name" className="form__label">
              Имя
              <input
                id="name"
                type="text"
                className={`form__input ${errors.name ? 'form__input_type-error' : ''}`}
                name="name"
                minLength="2"
                maxLength="30"
                required
                onChange={handleChange}
                placeholder="Виталий"
              />
              <span className="form__input-error">
                {errors.name}
              </span>
            </label>
          )}
          <label htmlFor="email" className="form__label">
            E-mail
            <input
              id="email"
              type="email"
              className={`form__input ${errors.email ? 'form__input_type-error' : ''}`}
              name="email"
              required
              placeholder="pochta@yandex.ru"
              onChange={handleChange}
            />
            <span className="form__input-error">
              {errors.email}
            </span>
          </label>
          <label htmlFor="password" className="form__label">
            Пароль
            <input
              id="password"
              type="password"
              className={`form__input form__input_password ${
                errors.password
                  ? 'form__input_type-error'
                  : ''
              }`}
              name="password"
              required
              placeholder="••••••••••••••"
              onChange={handleChange}
            />
            <span className={`form__input-error ${errorClass}`}>{errors.password}</span>
          </label>
          <span className="form__input-error_submit">
            {
              location.pathname === '/signup'
                ? registrationStatus
                : loginStatus
            }
          </span>
          <button
            className={`form__button ${location.pathname === '/signup'
              ? (isValid === false
              || isValidNameInput === false
              || isValidEmailInput === false
              || isLoading
                ? 'form__button_disabled'
                : '')
              : (isValid === false || isValidEmailInput === false || isLoading ? 'form__button_disabled' : '')
            }`}
            type="submit"
            disabled={location.pathname === '/signup'
              ? (isValid === false
              || isValidNameInput === false
              || isValidEmailInput === false)
              || isLoading
              : (isValid === false || isValidEmailInput === false || isLoading)}
          >
            {buttonText}
          </button>
          <p className="form__redirect">
            {registerStatus}
            <Link
              to={link}
              className="form__redirect form__redirect_active"
            >
              {linkText}
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}

PageWithForm.propTypes = {
  name: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  registerStatus: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  errorClass: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  registrationStatus: PropTypes.string,
  loginStatus: PropTypes.string,
  location: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

PageWithForm.defaultProps = {
  registrationStatus: '',
  loginStatus: '',
};

export default PageWithForm;
