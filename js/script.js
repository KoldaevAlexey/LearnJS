"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
    } else alert("Вы киноман");
  },
  rememberMyfilms: function () {
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
  },
  showMyDB: function () {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    }
  },
  writeYoutGenres: function () {
    errorInput: for (let i = 0; i <= 2; i++) {
      personalMovieDB.genres[i] = prompt(
        `Ваш любимый жанр под номером ${i + 1}`,
        ""
      );
      if (
        personalMovieDB.genres[i] == "" ||
        personalMovieDB.genres[i] == null
      ) {
        alert("Ошибка!");
        i--;
        continue errorInput;
      }
    }
    personalMovieDB.genres.forEach(function (element, index) {
      console.log(`Любимый жанр # ${index + 1} - это ${element}`);
    });
  },
  toggleVisdibleMyDB: function () {
    switch (personalMovieDB.privat) {
      case true:
        personalMovieDB.privat = false;
        break;
      case false:
        personalMovieDB.privat = true;
        break;
    }
  },
};

//personalMovieDB.start();
//personalMovieDB.detectPersonalLevel();
//personalMovieDB.rememberMyfilms();
//personalMovieDB.writeYoutGenres();
//personalMovieDB.toggleVisdibleMyDB();
//personalMovieDB.showMyDB();
