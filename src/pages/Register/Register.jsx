import React from 'react';
import PageWithForm from '../../components/PageWithForm/PageWithForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Register() {
  const { handleInputChange, errors } = useFormWithValidation();

  return (
    <main>
      <PageWithForm
        name="register"
        buttonText="Зарегистрироваться"
        title="Добро пожаловать!"
        registerStatus="Уже зарегистрированы?"
        linkText=" Войти"
        link="/signin"
        errorClass="form__input-error_register"
      >
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
            onChange={handleInputChange}
            placeholder="Виталий"
          />
          <span className="form__input-error form__input-error_name">
            {errors.name}
          </span>
        </label>
      </PageWithForm>
    </main>
  );
}

export default Register;
