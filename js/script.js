let numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

let lastFilm = prompt('Один из последних просмотренных фильмов','');

let rate = +prompt('На сколько оцените его?', '');

let lastFilm2 = prompt('Один из последних просмотренных фильмов','');

let rate2 = +prompt('На сколько оцените его?', '');

// console.log(result);

let personalMovieDB = {
    count: `${numberOfFilms}`,
    movies: {
        // [lastFilm]:`${rate}`,
        // [lastFilm2]:`${rate2}`
    },
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[lastFilm] = rate;
personalMovieDB.movies[lastFilm2] = rate2;


console.log(personalMovieDB);