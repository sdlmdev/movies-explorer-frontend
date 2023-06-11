import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import NotFound from '../../pages/NotFound/NotFound';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Main />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile />
          }
        />
        <Route
          path="/signin"
          element={
            <Login />
          }
        />
        <Route
          path="/signup"
          element={
            <Register />
          }
        />
        <Route
          path="/*"
          element={
            <NotFound />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
