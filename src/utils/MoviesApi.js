import { checkResponse } from './MainApi';

const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export default async function getMovies() {
  const request = await fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-type': 'application.json',
    },
  });
  return checkResponse(request);
}
