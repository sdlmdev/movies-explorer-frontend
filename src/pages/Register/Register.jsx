import React from 'react';
import PropTypes from 'prop-types';
import PageWithForm from '../../components/PageWithForm/PageWithForm';

function Register({
  createUser,
  registrationStatus,
  location,
  isLoading,
}) {
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
        onSubmit={createUser}
        registrationStatus={registrationStatus}
        location={location}
        isLoading={isLoading}
      />
    </main>
  );
}

Register.propTypes = {
  createUser: PropTypes.func.isRequired,
  registrationStatus: PropTypes.string,
  location: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

Register.defaultProps = {
  registrationStatus: '',
};

export default Register;
