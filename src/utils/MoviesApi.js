import { checkResponse } from './MainApi';
import { BASE_URL } from './constants';

export default async function getMovies() {
  const request = await fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-type': 'application.json',
    },
  });
  return checkResponse(request);
}
