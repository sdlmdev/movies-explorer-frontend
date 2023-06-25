export const timeConverter = (duration) => {
  const hours = Math.floor(duration / 60);
  const minuts = duration % 60;

  return hours === 0 ? `${minuts}м` : minuts === 0 ? `${hours}ч` : `${hours}ч ${minuts}м`;
};

export const filterShortMovies = (movies) => movies.filter((i) => i.duration <= 40);

export const handleFilterMovies = (movies, shortStatus, input) => {
  const filterdMovies = movies.filter((i) => {
    const { nameRU, nameEN } = i;
    const lowercaseQuery = input.toLowerCase();

    return (
      nameRU.toLowerCase().includes(lowercaseQuery)
      || nameEN.toLowerCase().includes(lowercaseQuery)
    );
  });

  if (shortStatus) {
    return filterShortMovies(filterdMovies);
  }

  return filterdMovies;
};
