const booksContainer = document.querySelector('.wishlist-books')
const moviesContainer = document.querySelector('.wishlist-movies')
import { addMoviesToPage, getMovieData, addBooksToPage } from "./utils.js"

export const displayWishlist = () => {
    const movies = JSON.parse(localStorage.getItem('movies'))
    const books = JSON.parse(localStorage.getItem('books'))

    booksContainer.innerHTML = ''
    moviesContainer.innerHTML = ''

    if(movies) getMoviesById(movies)
    if(books) getBooksById(books)
}

const getMoviesById = (idArr) => {
    idArr.forEach(movieId => {
        getMovieData(movieId, (movie) => {
            addMoviesToPage([movie], moviesContainer)
        })
    });
}

const displayBooks = (bookId) => {
    fetch(`https://openlibrary.org${bookId}.json`)
    .then(res => res.json())
    .then(json => {
        addBooksToPage([json], booksContainer, true)
    })
    .catch(err => console.error(err))
}

const getBooksById = (idArr) => {
    idArr.forEach(bookId => {
        displayBooks(bookId)
    })
}

displayWishlist()