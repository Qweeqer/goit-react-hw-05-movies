const key = 'a04463f6e73719e916bcf081dea9993b';

//------ Популярні фільми---

export function popularFilm() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=1`
  ).then(respons => respons.json());
}

//------- Пошук за ключовим словом----

export function findMovie(word) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${word}&page=1`
  ).then(respons => respons.json());
}

//------- Пошук по ід карти----
export function findMovieId(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
  ).then(respons => respons.json());
}

//------- Пошук по ід склад акторів----
export function findActorsId(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US&page=1`
  ).then(respons => respons.json());
}

//------- Пошук по ід огляду----
export function findReviewsId(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
  ).then(respons => respons.json());
}

//------------Trailer------------------------------/////
// export const fetchFilmVideo = async id => {
//   try {
//     const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}`;
//     const response = await fetch(url);
//     return response.json();
//   } catch (error) {
//     alert('Oops, an error occurred');
//   }
// };
