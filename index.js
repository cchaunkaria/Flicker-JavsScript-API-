// API 1: "http://www.omdbapi.com/?apikey=b76a2e96&s="
// API 2: "http://img.omdbapi.com/?apikey=[b76a2e96]&"
// API 3: "http://www.omdbapi.com/?i=tt3896198&apikey=b76a2e96"
// API 4: "https://www.omdbapi.com/?apikey=b76a2e96&s=fast"

const movieListEl = document.querySelector(".movie-list");



async function Search() {
    let userInput = document.querySelector("#userInput").value;
    console.log(userInput)
    const movies = await fetch(`https://www.omdbapi.com/?apikey=b76a2e96&s=${userInput}`);
    const moviesData = await movies.json();
    console.log(moviesData)
    movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
    document.getElementById("movie-list").style.opacity = 1;
}

Search();



function movieHTML(movie) {
    return ` <div class="movie-card">
    <div class="movie-card__container">
        <img src="${movie.Poster}" alt="">
        <p><b>Title:</b> ${movie.Title} </p>
        <p><b>Type:</b> ${movie.Type}  </p>
        <p><b>Year:</b> ${movie.Year} </p>
        <p><b>imdb ID:</b> ${movie.imdbID} </p>
    </div>
</div>`
}



