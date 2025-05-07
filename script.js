const searchForm = document.querySelector('form')
const movieContainer = document.querySelector('.movie-container')
const moviePoster = document.querySelector('.movie-poster')
const movieDetails = document.querySelector('.movie-details')

const inputBox = document.querySelector('.inputBox')

const getMovieInfo = async (movie) => {
    const myAPIkey = "b761a357";
    const url = `http://www.omdbapi.com/?apikey=${myAPIkey}&t=${movie}`

    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
    showMovieData(data)
};

const showMovieData = (data) => {
    const { Title, imdbRating, Genre, Released, Runtime, Actors, Poster, Plot } = data
    const movieElement = document.createElement('div')
    movieElement.classList.add("movie-info")
    movieElement.innerHTML = `
                          <h2>${Title}</h2>
                          <p<strong>Released Date: </strong>${Released}</p>
                          <p<strong>Rating: </strong>${imdbRating}</p>
                          <p<strong>Cast: </strong>${Actors}</p>
                          <p<strong>Desripction: </strong>${Plot}</p>
                          <p<strong>Duration: </strong>${Runtime}</p>
                          `

    const movieGenreElement = document.createElement('div')
    movieGenreElement.classList.add('movie-genre')

    Genre.split(",").forEach(element => {
        const p = document.createElement("p")
        p.innertext = element
        movieGenreElement.appendChild(p)
        console.log(p)

    })
    movieElement.appendChild(movieGenreElement)
    // Mowie about the All the worlds

    const moviePosterElement = document.createElement('div')
    moviePosterElement.classList.add('movie-poster')
    moviePosterElement.innerHTML = `<img src="${Poster}"/>`
    movieContainer.appendChild(moviePosterElement)

    movieContainer.appendChild(movieElement);
}



searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const movieName = inputBox.value.trim()
    if (movieName !== '') {
        getMovieInfo(movieName)
    }
})
