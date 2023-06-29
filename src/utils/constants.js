export const REGISTER_ERROR_MESSAGE = 'При регистрации возникла ошибка.';
export const LOGIN_ERROR_MESSAGE = 'При авторизации возникла ошибка.';
export const USER_DATA_ERROR_MESSAGE = 'При обновлении данных произошла ошибка.';
export const USER_DATA_SUCCESS_MESSAGE = 'Данные успешно изменены.';
export const NOT_FOUND_ERROR_MESSAGE = 'Ничего не найдено.';
export const REQUEST_ERROR_MESSAGE = `Во время запроса произошла ошибка.
Возможно, проблема с соединением или сервер недоступен.
Подождите немного и попробуйте ещё раз.`;
export const DURATION_SHORT_MOVIES = 40;
export const INPUT_SEARCH_ERROR = 'Нужно ввести ключевое слово';
export const NAME_ERROR_VALIDATION = 'Разрешены: латиница, кириллица, пробел, дефис.';
export const NAME_LENGTH_ERROR_VALIDATION = 'Минимум 2 символа.';
export const NAME_SPACE_ERROR_VALIDATION = 'Введите ключевое слово.';
export const EMAIL_FORMAT_ERROR_VALIDATION = 'Почта должна быть формата pochta@yandex.ru.';
export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const API_URL = 'https://api.sdlmdev.movies.nomoredomains.monster';
export const DEVICE_PARAMS = {
  desktop: {
    width: 1279,
    movies: {
      total: 12,
      more: 3,
    },
  },
  tablet: {
    width: 479,
    movies: {
      total: 8,
      more: 2,
    },
  },
  mobile: {
    width: 479,
    movies: {
      total: 5,
      more: 2,
    },
  },
};
