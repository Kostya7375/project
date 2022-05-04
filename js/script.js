    let numberOfFilms;

    function start (){
        

        while(numberOfFilms=='' || numberOfFilms==null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    }

    start();

    let personalMovieDB = {
        count: numberOfFilms,
        movies: {
        },
        actors: {},
        genres: [],
        privat: false
    };

// personalMovieDB.movies[lastFilm] = rate;
// personalMovieDB.movies[lastFilm2] = rate2;





    // function rememberMyFilms(){
    //     for(let i =0;i<2;i++){
    //         let a = prompt('Один из последних просмотренных фильмов?', ''),
    //         b = prompt('На сколько оцените его?', '');

    //         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    //             personalMovieDB.movies[a] = b;
    //             console.log('done');
    //         } else {       
    //             i--;
    //             console.log('error');
    //         }
    //         }
    // }

    // rememberMyFilms();

// 

    // function showMyDB(){
    //     if(personalMovieDB.privat == false){
    //         console.log(personalMovieDB);
    //     }
    // }

    // showMyDB();

    function showMyDB(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    }

    showMyDB(personalMovieDB.privat);

    function writeYourGenres() {
        for (let i=1;i<=3;i++){
            let c = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = c;
        }
    }

    writeYourGenres();

    function detectPersonalLevel(){
        
        if(personalMovieDB.count<10){
            console.log('Просмотрено слишком мало фильмов');
        }
        else if(personalMovieDB.count>=10){
            console.log('Вы классический зритель');
        }
        else if(personalMovieDB.count>=30){
            console.log('Вы КИНОМАН!');
        }
        else{
            console.log('Произошла ошибка');
        }

    } 

    detectPersonalLevel();

console.log(personalMovieDB);