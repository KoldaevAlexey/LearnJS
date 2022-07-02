"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
  } else alert("Вы киноман");
}

function rememberMyfilms() {
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
}

function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}

function writeYoutGenres() {
  for (let i = 0; i <= 2; i++) {
    personalMovieDB.genres[i] = prompt(
      `Ваш любимый жанр под номером ${i + 1}`,
      ""
    );
  }
}

detectPersonalLevel();
rememberMyfilms();
writeYoutGenres();
showMyDB();
