import { SHORT_FILM_MAX_TIME } from './constants';

export function setTimeFormat(mins) {
  let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    if (mins >= 60) {
      return hours + "ч " + minutes + "м";
    } else {
      return minutes + "м";
    }
}

export function searchShortMovies(movies) {
  return movies.filter((item) => item.duration <= SHORT_FILM_MAX_TIME);
}