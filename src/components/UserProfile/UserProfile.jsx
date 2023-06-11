import React, { useState } from 'react';
import './UserProfile.css';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function UserProfile() {
  const { handleInputChange, errors } = useFormWithValidation();
  const [buttonStatus, setButtonStatus] = useState(false);

  function toggleEditForm(e) {
    e.preventDefault();
    setButtonStatus(!buttonStatus);
  }

  return (
    <section className="profile-form">
      <h2 className="profile-form__title">Привет, Виталий!</h2>
      <form name="profile" noValidate onSubmit={toggleEditForm}>
        <fieldset className="profile-form__set">
          <label htmlFor="name" className="profile-form__label">
            Имя
            <input
              id="name"
              type="text"
              className={`profile-form__input ${errors.name ? 'profile-form__input_type-error' : ''}`}
              name="name"
              required
              minLength="2"
              maxLength="30"
              placeholder="Виталий"
              onChange={handleInputChange}
              disabled={!buttonStatus}
            />
          </label>
          <span className="profile-form__input-error profile-form__input-error_name">{errors.name}</span>
          <label htmlFor="email" className="profile-form__label">
            E-mail
            <input
              id="email"
              type="text"
              className={`profile-form__input ${errors.email ? 'profile-form__input_type-error' : ''}`}
              name="email"
              required
              placeholder="pochta@yandex.ru"
              onChange={handleInputChange}
              disabled={!buttonStatus}
            />
          </label>
          <span className="profile-form__input-error profile-form__input-error_email">{errors.email}</span>
          {/* <span className="profile-form__edit-result">
            Результат выполнения изменений
          </span> */}
          {!buttonStatus ? (
            <>
              <button
                className="profile-form__button"
                type="submit"
              >
                Редактировать
              </button>
              <button
                className="profile-form__button profile-form__button-signout"
                type="button"
              >
                Выйти из аккаунта
              </button>
            </>
          ) : (
            <button
              className="profile-form__button-save"
              type="submit"
            >
              Сохранить
            </button>
          )}
        </fieldset>
      </form>
    </section>
  );
}

export default UserProfile;
