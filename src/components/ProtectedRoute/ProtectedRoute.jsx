import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ Component, ...props }) {
  return props.isLoggedIn ? <Component {...props} /> : <Navigate to="/" />;
}

ProtectedRoute.propTypes = {
  Component: PropTypes.elementType.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
