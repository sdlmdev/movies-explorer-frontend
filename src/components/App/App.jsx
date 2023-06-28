import React, { useState, useEffect } from 'react';
import './App.css';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import NotFound from '../../pages/NotFound/NotFound';
import {
  login,
  register,
  checkToken,
  getSavedMovies,
  saveMovie,
  updateUser,
  deleteMovie,
} from '../../utils/MainApi';
import getMovies from '../../utils/MoviesApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const [isMovies, setIsMovies] = useState(false);
  const [isSavedMovies, setIsSavedMovies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorFound, setIsErrorFound] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [updateUserStatus, setUpdateUserStatus] = useState('');
  const [isSuccessUpdate, setIsSuccessUpdate] = useState(false);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const jwt = localStorage.getItem('jwt');

  const updateUserData = async (email, name) => {
    setIsLoading(true);
    try {
      const newUserData = await updateUser(email, name);

      setCurrentUser(newUserData);
      setIsSuccessUpdate(true);
      setUpdateUserStatus('Данные успешно изменены');
    } catch (err) {
      console.log(err);
      setIsSuccessUpdate(false);
      setUpdateUserStatus('При обновлении данных произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  const getAllmovies = async () => {
    setIsLoading(true);
    try {
      const films = await getMovies();
      localStorage.setItem('movies', JSON.stringify(films));

      setAllMovies(films);
      setIsMovies(true);
      setIsErrorFound(false);
    } catch (err) {
      console.log(err);
      setIsMovies(false);
      setIsErrorFound(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteMovie = async (card) => {
    try {
      await deleteMovie(card._id);

      const newSavedMovies = savedMovies.filter((i) => i.movieId !== card.movieId);
      setSavedMovies(newSavedMovies);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveMovie = async (card) => {
    try {
      const film = await saveMovie(card);

      setSavedMovies([...savedMovies, film]);
    } catch (err) {
      console.log(err);
    }
  };

  const checkJwt = async () => {
    try {
      const userData = await checkToken(jwt);

      setIsLoggedIn(true);
      setCurrentUser(userData);
      navigate(location.pathname);
    } catch (err) {
      console.log(err);
      setIsLoggedIn(false);
    }
  };

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const user = await login(email, password);
      localStorage.setItem('jwt', user.token);

      setIsLoggedIn(true);
      navigate('/movies');
    } catch (err) {
      console.log(err);
      setLoginStatus('При авторизации возникла ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  const createUser = async (name, email, password) => {
    setIsLoading(true);
    try {
      const user = await register(name, email, password);
      await handleLogin(user.email, password);

      setIsLoggedIn(true);
      navigate('/movies');
    } catch (err) {
      console.log(err);
      setRegistrationStatus('При регистрации возникла ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    navigate('/');
  };

  const getMyMovies = async () => {
    try {
      const myMovies = await getSavedMovies();
      localStorage.setItem('savedMovies', JSON.stringify(myMovies));

      setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
      setIsSavedMovies(true);
    } catch (err) {
      console.log(err);
      setIsSavedMovies(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getAllmovies();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (
      isLoggedIn
      && (location.pathname === '/saved-movies' || location.pathname === '/movies')) {
      getMyMovies();
    }
  }, [isLoggedIn, location.pathname]);

  useEffect(() => {
    if (jwt) {
      checkJwt();
    }
  }, [jwt]);

  useEffect(() => {
    if (!isLoggedIn) {
      setCurrentUser({});
      setSavedMovies([]);
      setAllMovies([]);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && (location.pathname === '/signup' || location.pathname === '/signin')) {
      navigate('/');
    }
  }, [isLoggedIn, location.pathname]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={(
              <Main
                isLoggedIn={isLoggedIn}
              />
            )}
          />
          <Route
            path="/signin"
            element={(
              <Login
                handleLogin={handleLogin}
                loginStatus={loginStatus}
                location={location}
                isLoading={isLoading}
              />
            )}
          />
          <Route
            path="/signup"
            element={(
              <Register
                createUser={createUser}
                registrationStatus={registrationStatus}
                location={location}
                isLoading={isLoading}
              />
            )}
          />
          <Route
            path="/*"
            element={
              <NotFound />
            }
          />
          <Route
            path="/movies"
            element={(
              <ProtectedRoute
                Component={Movies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                isErrorFound={isErrorFound}
                isNotFound={isNotFound}
                setIsNotFound={setIsNotFound}
                isMovies={isMovies}
                windowSize={windowSize}
                setWindowSize={setWindowSize}
                location={location}
                handleDeleteMovie={handleDeleteMovie}
                handleSaveMovie={handleSaveMovie}
                savedMovies={savedMovies}
                isShortMovies={isShortMovies}
                setIsShortMovies={setIsShortMovies}
                allMovies={allMovies}
              />
            )}
          />
          <Route
            path="/saved-movies"
            element={(
              <ProtectedRoute
                Component={SavedMovies}
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                isNotFound={isNotFound}
                setIsNotFound={setIsNotFound}
                isErrorFound={isErrorFound}
                windowSize={windowSize}
                setWindowSize={setWindowSize}
                location={location}
                handleDeleteMovie={handleDeleteMovie}
                handleSaveMovie={handleSaveMovie}
                isSavedMovies={isSavedMovies}
                savedMovies={savedMovies}
                isShortMovies={isShortMovies}
                setIsShortMovies={setIsShortMovies}
              />
            )}
          />
          <Route
            path="/profile"
            element={(
              <ProtectedRoute
                Component={Profile}
                isLoggedIn={isLoggedIn}
                handleSignOut={handleSignOut}
                navigate={navigate}
                updateUserData={updateUserData}
                updateUserStatus={updateUserStatus}
                setUpdateUserStatus={setUpdateUserStatus}
                isSuccessUpdate={isSuccessUpdate}
                isLoading={isLoading}
              />
            )}
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
