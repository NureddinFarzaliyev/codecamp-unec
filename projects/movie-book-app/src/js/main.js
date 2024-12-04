
import { addMoviesToPage, showAddBtn, showRemoveBtn } from "./utils.js"

// const addMoviesToPage = (movieArr, container) => {
//     movieArr.forEach(movie => {
//         const movieCard = document.createElement('div')
//         movieCard.setAttribute("data-id", movie.id)
//         movieCard.innerHTML = `<h1>${movie.title}</h1>`
//         container.appendChild(movieCard)

//         movieCard.addEventListener('click', (e) => {
//             getMovieData(movieCard.getAttribute('data-id'))
//         })
//     }) 
// }

const setMovies = (page, category, containerSelector) => {
    const url = `https://api.themoviedb.org/3/movie/${category ? category : 'top_rated'}?language=en-US&page=${page ? page : 1}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB}`
        }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => addMoviesToPage(json.results, document.querySelector(containerSelector)))
    .catch(err => console.error(err));
}

// const getMovieData = (id) => {
//     const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
//     const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${import.meta.env.VITE_TMDB}`
//     }
//     };

//     fetch(url, options)
//     .then(res => res.json())
//     .then(json => showDetailedMovieData(json))
//     .catch(err => console.error(err));
// }

// const checkIfBookInWishlist = (bookId, addBtn, removeBtn) => {
//     const wishlist = JSON.parse(localStorage.getItem('books'))
//     if(wishlist && wishlist.includes(bookId)) {
//         addBtn.classList.add('hidden')
//         removeBtn.classList.remove('hidden')
//     }else{
//         addBtn.classList.remove('hidden')
//         removeBtn.classList.add('hidden')
//     }
// }

// const addBooksToPage = (bookArr, container) => {
//     container.innerHTML = ''
//     bookArr.forEach(book => {
//         const bookCard = document.createElement('div')
        
//         bookCard.innerHTML = `
//         <h1 class="bg-amber-800">${book.title}</h1>
//         `

//         const addBtn = document.createElement('button')
//         addBtn.innerHTML = 'Add to list'

//         const removeBtn = document.createElement('button')
//         removeBtn.innerHTML = 'Remove from list'

//         addBtn.addEventListener('click', () => {
//             const currentBooks = JSON.parse(localStorage.getItem('books'))
//             localStorage.setItem('books', currentBooks ? JSON.stringify([...currentBooks, book.key]) : JSON.stringify([book.key]))
//             checkIfBookInWishlist(book.key, addBtn, removeBtn)
//         })

//         removeBtn.addEventListener('click', () => { 
//             const currentBooks = JSON.parse(localStorage.getItem('books'))
//             localStorage.setItem('books', JSON.stringify(currentBooks.filter(item => item !== book.key)))
//             checkIfBookInWishlist(book.key, addBtn, removeBtn)
//         })

        
//         bookCard.appendChild(removeBtn)
//         bookCard.appendChild(addBtn)

//         checkIfBookInWishlist(book.key, addBtn, removeBtn)
        
//         container.appendChild(bookCard)
        
//     }) 
// }

// const recommendBooks = (query, container) => {
//     container.innerHTML = 'Books Loading'
//     const url = `https://openlibrary.org/search.json?q=${query}&limit=5`
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//         }
//     };

//     fetch(url, options)
//     .then(res => res.json())
//     .then(json => addBooksToPage(json.docs, container))
//     .catch(err => console.error(err));
// }

const currentMovieContainer = document.querySelector('.movie-info')
// const currentMovieData = document.querySelector('.movie-data')
// const currentBookData = document.querySelector('.book-data')

// const showAddBtn = () => {
//     document.querySelector('.movie-info button.add').classList.remove('hidden')
//     document.querySelector('.movie-info button.remove').classList.add('hidden')
// }

// const showRemoveBtn = () => {
//     document.querySelector('.movie-info button.add').classList.add('hidden')
//     document.querySelector('.movie-info button.remove').classList.remove('hidden')
// }

// const showDetailedMovieData = (movieObj) => {
//     console.log(movieObj)
//     currentMovieContainer.classList.remove('hidden')
//     currentMovieContainer.setAttribute('data-id', movieObj.id)
    
//     const currentMovies = JSON.parse(localStorage.getItem('movies'))
//     if(currentMovies.every((item) => item != movieObj.id)) showAddBtn()
//     else showRemoveBtn()

//     let bookQuery = ''
//     for(let i = 0; i < movieObj.genres.length; i++) {
//         bookQuery += movieObj.genres[i].name + (i === movieObj.genres.length - 1 ? '' : '+')
//     }

//     recommendBooks(bookQuery, currentBookData)

//     currentMovieData.innerHTML = `${movieObj.title}`
// }

// Close detailed movie information when clicked on cross
document.querySelector('.movie-info button.close').addEventListener('click', () => {
    currentMovieContainer.classList.add('hidden')
})

// Add movie to localhost when the button is clicked
document.querySelector('.movie-info button.add').addEventListener('click', () => {
    const movieId = currentMovieContainer.getAttribute('data-id')
    localStorage.setItem('movies', localStorage.getItem('movies') ? JSON.stringify([...JSON.parse(localStorage.getItem('movies')), movieId]) : JSON.stringify([movieId]))
    showRemoveBtn()
})

// Remove movie from localhost when the button is clicked
document.querySelector('.movie-info button.remove').addEventListener('click', () => {
    const movieId = currentMovieContainer.getAttribute('data-id')
    const currentList = JSON.parse(localStorage.getItem('movies'))
    localStorage.setItem('movies', JSON.stringify(currentList.filter(item => item !== movieId)))
    showAddBtn()
})

// Set default top and popular movies on the page
let topPage = 1
setMovies(topPage, 'top_rated', '.top-movies')
let popularPage = 1
setMovies(popularPage, 'popular', '.popular-movies')

// Load more top movies
document.querySelector('.top-movies-container .load-more').addEventListener('click', (e) => {
    e.preventDefault()
    topPage++
    setMovies(topPage, 'top_rated', '.top-movies')
})

// Load more popular movies
document.querySelector('.popular-movies-container .load-more').addEventListener('click', (e) => {
    e.preventDefault()
    popularPage++
    setMovies(popularPage, 'popular', '.popular-movies')
})  