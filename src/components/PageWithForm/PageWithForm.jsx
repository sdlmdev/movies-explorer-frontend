import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PageWithForm.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import logo from '../../images/logo.svg';

function PageWithForm({
  name,
  buttonText,
  title,
  registerStatus,
  linkText,
  children,
  link,
  errorClass,
}) {
  const { handleInputChange, errors } = useFormWithValidation();

  return (
    <section className="form">
      <Link to="/" className="logo" title="На главную">
        <img src={logo} alt="На главную" />
      </Link>
      <h2 className="form__title">{title}</h2>
      <form name={name} noValidate className="form__container">
        <fieldset className="form__set">
          {children}
          <label htmlFor="email" className="form__label">
            E-mail
            <input
              id="email"
              type="text"
              className="form__input"
              name="email"
              required
              placeholder="pochta@yandex.ru"
              onChange={handleInputChange}
            />
            <span className="form__input-error">{errors.email}</span>
          </label>
          <label htmlFor="password" className="form__label">
            Пароль
            <input
              id="password"
              type="password"
              className="form__input form__input_password"
              name="password"
              required
              placeholder="••••••••••••••"
              onChange={handleInputChange}
            />
            <span className={`form__input-error ${errorClass}`}>{errors.password}</span>
          </label>
          <button
            className="form__button"
            type="submit"
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
  children: PropTypes.node,
  link: PropTypes.string.isRequired,
  errorClass: PropTypes.string.isRequired,
};

PageWithForm.defaultProps = {
  children: null,
};

export default PageWithForm;
