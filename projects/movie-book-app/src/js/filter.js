export const filterMovies = (filterCallback) => {
    let movies = document.querySelectorAll('.explore .movie-card')

    movies.forEach(movie => {
        if(filterCallback(movie)) movie.classList.remove('hidden')
        else movie.classList.add('hidden')
    })
}

const showAllMovies = () => {
    const movies = document.querySelectorAll('.movie-card')
    movies.forEach(movie => movie.classList.remove('hidden'))
}


export const filterFn = () => {
    const minAvg = document.querySelector('input[name="min-avg"]').value ? document.querySelector('input[name="min-avg"]').value : 0
    const maxAvg = document.querySelector('input[name="max-avg"]').value ? document.querySelector('input[name="max-avg"]').value : 10

    const minYear = document.querySelector('input[name="min-year"]').value ? document.querySelector('input[name="min-year"]').value : 0
    const maxYear = document.querySelector('input[name="max-year"]').value ? document.querySelector('input[name="max-year"]').value : 9999

    const filterCallback = (movie) => {
        const movieAvg = movie.getAttribute('data-avg')
        const movieYear = movie.getAttribute('data-date').split('-')[0]
        return movieAvg >= minAvg && movieAvg <= maxAvg && movieYear >= minYear && movieYear <= maxYear
    }

    filterMovies(filterCallback)
}

document.querySelector('form.filter-movies').onsubmit = (e) => {
    e.preventDefault()
    filterFn()
}
