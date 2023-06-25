import React from 'react';
import PropTypes from 'prop-types';
import PageWithForm from '../../components/PageWithForm/PageWithForm';

function Login({
  handleLogin,
  loginStatus,
  location,
  isLoading,
}) {
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
        buttonStatus
        onSubmit={handleLogin}
        loginStatus={loginStatus}
        location={location}
        isLoading={isLoading}
      />
    </main>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  loginStatus: PropTypes.string,
  location: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

Login.defaultProps = {
  loginStatus: '',
};

export default Login;
