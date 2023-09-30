// TDMB
const API_KEY = 'api_key=3b886a5bfb2c988a59043d524d92e73c';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;


// liknking to html
const main = document.getElementById('main');
const form = document.getElementById('form');
const searchbtn = document.getElementById('searchbtn');


// main page //data
getMovies(API_URL);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data =>
        showMovies(data.results)
    
        

)}


function showMovies(data){
    main.innerHTML ='';

    console.log(data)
    data.forEach(movie =>{
        const{title, poster_path, vote_average, overview} =movie;
        const movie1 = document.createElement('main');
        movie1.classList.add('movie');
        movie1.innerHTML = `
    
        <img src = '${IMG_URL + poster_path}' alt = '${title}'>
            <div class="movie-info">
                <h4>${title}</h4>
                <span class = "${getcolor(vote_average)}">${vote_average}</span>
            </div>

            <div class ="overview">
                ${overview}
            </div>
        </div>
        
        
        `
        main.appendChild(movie1)
    })

}

function getcolor(vote){
    if(vote=> 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'

    }
}


function searchMovies() {
    const search = document.getElementById('search');
    const search_URL = searchURL + '&query=' + search.value; // Corrected URL construction
    getMovies(search_URL)
    
}
