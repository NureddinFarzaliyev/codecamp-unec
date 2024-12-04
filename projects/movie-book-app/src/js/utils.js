const currentMovieData = document.querySelector('.movie-data')
const currentBookData = document.querySelector('.book-data')
const currentMovieContainer = document.querySelector('.movie-info')


export const checkIfBookInWishlist = (bookId, addBtn, removeBtn) => {
    const wishlist = JSON.parse(localStorage.getItem('books'))
    if(wishlist && wishlist.includes(bookId)) {
        addBtn.classList.add('hidden')
        removeBtn.classList.remove('hidden')
    }else{
        addBtn.classList.remove('hidden')
        removeBtn.classList.add('hidden')
    }
}

export const addBooksToPage = (bookArr, container) => {
    container.innerHTML = ''
    bookArr.forEach(book => {
        const bookCard = document.createElement('div')
        bookCard.classList.add('bg-amber-800', 'text-white', 'p-2', 'm-1')
        
        bookCard.innerHTML = `
        <h1 class="font-bold">${book.title}</h1>
        `

        const addBtn = document.createElement('button')
        addBtn.innerHTML = 'Add to list'

        const removeBtn = document.createElement('button')
        removeBtn.innerHTML = 'Remove from list'

        addBtn.addEventListener('click', () => {
            const currentBooks = JSON.parse(localStorage.getItem('books'))
            localStorage.setItem('books', currentBooks ? JSON.stringify([...currentBooks, book.key]) : JSON.stringify([book.key]))
            checkIfBookInWishlist(book.key, addBtn, removeBtn)
        })

        removeBtn.addEventListener('click', () => { 
            const currentBooks = JSON.parse(localStorage.getItem('books'))
            localStorage.setItem('books', JSON.stringify(currentBooks.filter(item => item !== book.key)))
            checkIfBookInWishlist(book.key, addBtn, removeBtn)
        })

        
        bookCard.appendChild(removeBtn)
        bookCard.appendChild(addBtn)

        checkIfBookInWishlist(book.key, addBtn, removeBtn)
        
        container.appendChild(bookCard)
        
    }) 
}


export const showAddBtn = () => {
    document.querySelector('.movie-info button.add').classList.remove('hidden')
    document.querySelector('.movie-info button.remove').classList.add('hidden')
}

export const showRemoveBtn = () => {
    document.querySelector('.movie-info button.add').classList.add('hidden')
    document.querySelector('.movie-info button.remove').classList.remove('hidden')
}

const showDetailedMovieData = (movieObj) => {
    console.log(movieObj)
    currentMovieContainer.classList.remove('hidden')
    currentMovieContainer.setAttribute('data-id', movieObj.id)
    
    const currentMovies = JSON.parse(localStorage.getItem('movies'))
    if(currentMovies.every((item) => item != movieObj.id)) showAddBtn()
    else showRemoveBtn()

    let bookQuery = ''
    for(let i = 0; i < movieObj.genres.length; i++) {
        bookQuery += movieObj.genres[i].name + (i === movieObj.genres.length - 1 ? '' : '+')
    }

    recommendBooks(bookQuery, currentBookData)

    currentMovieData.innerHTML = `${movieObj.title}`
}

const recommendBooks = (query, container) => {
    container.innerHTML = 'Books Loading'
    const url = `https://openlibrary.org/search.json?q=${query}&limit=5`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => addBooksToPage(json.docs, container))
    .catch(err => console.error(err));
}


const getMovieData = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB}`
    }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => showDetailedMovieData(json))
    .catch(err => console.error(err));
}

export const addMoviesToPage = (movieArr, container) => {
    movieArr.forEach(movie => {
        const movieCard = document.createElement('div')
        movieCard.setAttribute("data-id", movie.id)
        movieCard.innerHTML = `<h1>${movie.title}</h1>`
        container.appendChild(movieCard)

        movieCard.addEventListener('click', (e) => {
            getMovieData(movieCard.getAttribute('data-id'))
        })
    }) 
}