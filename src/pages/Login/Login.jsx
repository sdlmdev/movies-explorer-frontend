import React from 'react';
import PageWithForm from '../../components/PageWithForm/PageWithForm';

function Login() {
  return (
    <main>
      <PageWithForm
        name="login"
        buttonText="Войти"
        title="Рады видеть!"
        registerStatus="Ещё не зарегистрированы?"
        linkText=" Регистрация"
        link="/signup"
        errorClass="form__input-error_login"
      />
    </main>
  );
}

export default Login;
