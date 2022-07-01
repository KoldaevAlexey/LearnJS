"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else alert("Вы киноман");

invalidInputValue: for (let i = 0; i < 2; i++) {
  let lastMovie = prompt("Один из последних просмотренных фильмов?", "");
  if (lastMovie == "" || lastMovie === null || lastMovie.length > 50) {
    alert("Ошибка!");
    i--;
    continue invalidInputValue;
  }
  let lastMovieScore = prompt("На сколько оцените его?", "");
  if (
    lastMovieScore == "" ||
    lastMovieScore === null ||
    lastMovieScore.length > 50
  ) {
    alert("Ошибка!");
    i--;
    continue invalidInputValue;
  }
  personalMovieDB.movies[lastMovie] = lastMovieScore;
}

console.log(personalMovieDB);
