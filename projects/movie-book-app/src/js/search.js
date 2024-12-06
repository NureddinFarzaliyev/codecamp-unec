import { addBooksToPage, addMoviesToPage } from "./utils"

const searchInput = document.querySelector('#search-input')
const searchTypeInput = document.querySelector('#search-type')
const searchForm = document.querySelector('#search-form')
// const searchResults = document.querySelector('.results')
const bookResults = document.querySelector('.book-results')
const movieResults = document.querySelector('.movie-results')
const searchLoading = document.querySelector('.search-loading')

const searchTypes = {
    book: 'book',
    bookTitle: 'book-title',
    bookAuthor: 'book-author',
    movie: 'movie',
}

const fetchBooks = (query, searchType) => {
    const url = `https://openlibrary.org/search.json?${searchType === searchTypes.bookTitle ? 'title' : searchType === searchTypes.bookAuthor ? 'author' : 'q'}=${query}&limit=20`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };
    // e.preventDefault()

    fetch(url, options)
    .then(res => res.json())
    .then(json => showResults(json, searchType))
    .catch(err => console.error(err));
}

const showResults = (data, searchType) => {
    searchLoading.classList.add('hidden')
    searchInput.disabled = false
    searchTypeInput.disabled = false
    searchForm.querySelector('button[type="submit"]').disabled = false

    if(searchType === searchTypes.book || searchType === searchTypes.bookAuthor || searchType === searchTypes.bookTitle) addBooksToPage(data.docs, bookResults)
    else if(searchType === searchTypes.movie) addMoviesToPage(data.results, movieResults)
}

const fetchMovies = (query, page) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page ? page : 1}`;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB}`
    }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => showResults(json, searchTypes.movie))
    .catch(err => console.error(err));
}


searchForm.onsubmit = (e) => {
    e.preventDefault()

    if(searchInput.value === '') return
    
    const query = searchInput.value
    const type = searchTypeInput.value

    // searchResults.innerHTML = ''
    bookResults.innerHTML = ''
    movieResults.innerHTML = ''
    searchLoading.classList.remove('hidden')

    searchInput.disabled = true
    searchTypeInput.disabled = true
    searchForm.querySelector('button[type="submit"]').disabled = true

    searchLoading.classList.remove('hidden')

    try {

        if(type === searchTypes.book || type === searchTypes.bookTitle || type === searchTypes.bookAuthor) {
            fetchBooks(query, type)
        }else if(type === searchTypes.movie) {
            fetchMovies(query)
        }else{
            throw new Error('Invalid search type')
        }
        
    } catch (error) {
        console.error(error)    
    }
}   
