import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import './UserProfile.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function UserProfile({
  updateUserData,
  updateUserStatus,
  handleSignOut,
  isSuccessUpdate,
  isLoading,
}) {
  const {
    handleChange,
    errors,
    isValid,
    isValidNameInput,
    isValidEmailInput,
    values,
    setValues,
    resetForm,
    setIsValidNameInput,
    setIsValidEmailInput,
    setIsValid,
  } = useFormWithValidation();
  const { name, email } = useContext(CurrentUserContext);

  const handleEditUserData = (e) => {
    e.preventDefault();
    updateUserData(values.email, values.name);
  };

  useEffect(() => {
    resetForm();
    setValues({
      name,
      email,
    });
  }, [setValues, resetForm]);

  useEffect(() => {
    if (values.email === email && isValidNameInput === true) {
      setIsValidEmailInput(true);
      setIsValid(true);
    }

    if (values.name === name && isValidEmailInput === true) {
      setIsValidNameInput(true);
      setIsValid(true);
    }

    if (values.name === name && values.email === email) {
      setIsValidEmailInput(false);
      setIsValidNameInput(false);
      setIsValid(false);
    }
  }, [isValidNameInput, isValidEmailInput, values, handleEditUserData]);

  return (
    <section className="profile-form">
      <h2 className="profile-form__title">{`Привет, ${name}!`}</h2>
      <form name="profile" noValidate onSubmit={handleEditUserData}>
        <fieldset className="profile-form__set">
          <label htmlFor="name" className="profile-form__label">
            Имя
            <input
              id="name"
              type="text"
              className={`profile-form__input
                ${errors.name
                ? 'profile-form__input_type-error'
                : ''
              }`}
              name="name"
              required
              minLength="2"
              maxLength="30"
              placeholder="Виталий"
              onChange={handleChange}
              value={values.name || ''}
            />
          </label>
          <span className="profile-form__input-error profile-form__input-error_name">
            {errors.name}
          </span>
          <label htmlFor="email" className="profile-form__label">
            E-mail
            <input
              id="email"
              type="text"
              className={`profile-form__input
                ${errors.email
                ? 'profile-form__input_type-error'
                : ''
              }`}
              name="email"
              required
              placeholder="pochta@yandex.ru"
              onChange={handleChange}
              value={values.email || ''}
            />
          </label>
          <span className="profile-form__input-error profile-form__input-error_email">
            {errors.email}
          </span>
          <span className={`profile-form__edit-result
            ${isSuccessUpdate
            ? 'profile-form__edit-result_success'
            : ''}`}
          >
            {updateUserStatus}
          </span>
          <button
            className={`profile-form__button ${
              isValid === false
              || isValidNameInput === false
              || isValidEmailInput === false
              || isLoading
                ? 'form__button_disabled'
                : ''
            }`}
            type="submit"
            disabled={
              isValid === false
              || isValidNameInput === false
              || isValidEmailInput === false
              || isLoading
            }
          >
            Редактировать
          </button>
          <button
            className="profile-form__button profile-form__button-signout"
            type="button"
            onClick={handleSignOut}
          >
            Выйти из аккаунта
          </button>
        </fieldset>
      </form>
    </section>
  );
}

UserProfile.propTypes = {
  updateUserData: PropTypes.func.isRequired,
  updateUserStatus: PropTypes.string,
  handleSignOut: PropTypes.func.isRequired,
  isSuccessUpdate: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

UserProfile.defaultProps = {
  updateUserStatus: '',
};

export default UserProfile;
