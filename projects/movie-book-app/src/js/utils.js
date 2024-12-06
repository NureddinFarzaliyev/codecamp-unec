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

export const addBooksToPage = (bookArr, container, preventReset) => {
    if(!preventReset) container.innerHTML = ''
    bookArr.forEach(async book => {
        const bookCard = document.createElement('div')

        const bookName = document.createElement('div')
        const bookInformation = document.createElement('div')
        const bookRight = document.createElement('div')

        bookCard.innerHTML = `
        <div>
        <img class="book-img w-32 shrink-0 rounded-md" src="https://covers.openlibrary.org/b/id/${book.covers ? book.covers[0] : book.cover_i}-L.jpg" alt=${book.title} width="200" />
        </div>
        `
        bookName.innerHTML += `
        <h1 class="font-bold text-2xl">${book.title}</h1>
        `
        const authorEl = document.createElement('h2')
        authorEl.classList.add('text-lg', 'font-semibold', 'my-1')
    
        if(book.authors){
            fetchAuthor(book.authors[0].author.key, (author) => {
                authorEl.innerHTML = author
            })
        }else{
            authorEl.innerHTML = book.author_name[0]
        }

        bookInformation.innerHTML = `
        <p class="mb-3">${book.description ? book.description.value ? book.description.value : book.description : ''}</p>
        `

        bookRight.classList.add('w-[90%]', 'md:w-[60%]', 'ml-8')
        bookRight.appendChild(bookName)
        bookRight.appendChild(authorEl)
        bookRight.appendChild(bookInformation)

        bookCard.classList.add('bg-fg', 'text-white', 'flex', 'flex-col', 'gap-2', 'items-center', 'md:items-start' , 'md:flex-row', 'my-4', 'p-5', 'rounded-md')
        bookCard.appendChild(bookRight)



        const addBtn = document.createElement('button')
        addBtn.innerHTML = '<button class="text-3xl font-bold color-emerald-700 p-2 border-emerald-700 rounded-full border-2 text-emerald-700 btn-glow transition-all hover:scale-105 active:scale-95 hover:bg-emerald-700 hover:text-white"><i class="fa-solid fa-heart-circle-plus"></i></button>'

        const removeBtn = document.createElement('button')
        removeBtn.innerHTML = '<button class="text-3xl foRemove from listnt-bold color-emerald-700 p-2 border-red-800 rounded-full border-2 text-red-800 btn-red-glow transition-all hover:scale-105 active:scale-95 hover:bg-red-800 hover:text-white"><i class="fa-solid fa-heart-circle-minus"></i></button>'

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

        
        bookRight.appendChild(removeBtn)
        bookRight.appendChild(addBtn)

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
    currentMovieContainer.classList.add('comein-anim')
    currentMovieContainer.classList.remove('hidden')
    document.querySelector('body').classList.add('overflow-hidden', 'h-screen')


    setTimeout(() => {
        currentMovieContainer.classList.remove('comein-anim')
    }, 200);

    currentMovieContainer.setAttribute('data-id', movieObj.id)

    const currentMovies = JSON.parse(localStorage.getItem('movies'))
    if(currentMovies){
        if(currentMovies.every((item) => item != movieObj.id)) showAddBtn()
        else showRemoveBtn()
    }else showAddBtn()

    let bookQuery = ''
    for(let i = 0; i < movieObj.genres.length; i++) {
        bookQuery += movieObj.genres[i].name + (i === movieObj.genres.length - 1 ? '' : '+')
    }

    recommendBooks(bookQuery, currentBookData)

    currentMovieData.innerHTML = `
    <div class="text-white">
        <h1 class="text-4xl font-bold text-white mb-2">${movieObj.title}</h1>
        <span>${movieObj.runtime} mins</span>
        <p class="lg:w-[70%] mt-1">${movieObj.overview}</p>
    </div>
    `
}

const recommendBooks = (query, container) => {
    container.innerHTML = '<i class="fa-solid fa-spinner animate-spin text-6xl text-white absolute top-64 left-[48%]"></i>'
    const url = `https://openlibrary.org/search.json?q=${query}&limit=6`
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

export const getMovieData = (id, callback) => {
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
    .then(json => callback(json))
    .catch(err => console.error(err));
}

export const addMoviesToPage = (movieArr, container) => {
    movieArr.forEach(movie => {
        const movieCard = document.createElement('div')
        movieCard.setAttribute("data-id", movie.id)
        movieCard.setAttribute("data-avg", movie.vote_average)
        movieCard.setAttribute("data-date", movie.release_date)
        movieCard.classList.add('movie-card', 'active:scale-95', 'transition-all')

        movieCard.innerHTML = `
        <div class="w-fit movie-card-img rounded-lg shadow-xl hover:scale-105 cursor-pointer transition-all duration-300">
            <img class="movie-img"
            src="${movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : `https://placehold.co/200x300/000000/ffffff?text=${movie.title.split(' ').join('+')}`}"
            alt=${movie.title} />
        </div>
        `

        container.appendChild(movieCard)

        movieCard.addEventListener('click', (e) => {
            getMovieData(movieCard.getAttribute('data-id'), showDetailedMovieData)
        })
    }) 
}


export const fetchGenres = (callback) => {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzExMjU1ODhkMmRlOGJhMzAzNTQ1M2M0OTZiZjVmYSIsIm5iZiI6MTY3NjExNzkzMS44NzY5OTk5LCJzdWIiOiI2M2U3ODdhYjZjODQ5MjAwODUxYTVkMzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.A98yFTn6CRpr79JnVi1jIVYdFDFTQynlb-X8vkngvM4'
    }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => callback(json))
    .catch(err => console.error(err));
}

const fetchAuthor = async (id, callback) => {
    const url = `https://openlibrary.org${id}.json`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => callback(json.name))
    .catch(err => console.error(err));
}