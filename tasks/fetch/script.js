const fetchTypes = {
    categories: 'categories',
    products: 'products',
}

const container = document.querySelector('.container')
const categories = document.querySelector('.categories')
const noResultsContainer = document.querySelector('.no-results')

const fetchItems = (url, type) => {
    fetch(url).then(res => res.json()).then(data => {
        switch (type) {
            case fetchTypes.products:
                if(data.total == 0) noResults()
                else setItems(data.products)
                break;
            case fetchTypes.categories:
                setCategories(data)
                break;
            default:
                console.log(data)
                break;
        }
    })
}

const noResults = () => {
    noResultsContainer.style.display = 'block'
    container.innerHTML = ''
}

const createCard = (cardInfo) => {
    const card = document.createElement('div')
    card.classList.add('card')
    const image = document.createElement('img')
    image.alt = cardInfo.title
    image.src = cardInfo.thumbnail
    card.appendChild(image)
    const title = document.createElement('h2')
    title.textContent = cardInfo.title
    card.appendChild(title)
    const brand = document.createElement('h3')
    brand.textContent = cardInfo.brand
    card.appendChild(brand)
    const description = document.createElement('p')
    description.textContent = cardInfo.description
    card.appendChild(description)
    const price = document.createElement('span')
    price.textContent = `$${cardInfo.price}`
    price.classList.add('price')
    card.appendChild(price)
    const rating = document.createElement('span')
    rating.textContent = cardInfo.rating
    rating.classList.add('rating')
    card.appendChild(rating)
    container.appendChild(card)
}

const createCategory = (categoryInfo) => {
    const category = document.createElement('div')
    category.classList.add('category')
    category.onclick = () => {fetchItems(categoryInfo.url, fetchTypes.products)}
    const name = document.createElement('span')
    name.textContent = categoryInfo.name
    category.appendChild(name)
    categories.appendChild(category)
}


const setItems = (products) => {
    noResultsContainer.style.display = 'none'
    container.innerHTML = ''
    products.forEach((product) => {createCard(product)})
}

const setCategories = (categories) => {
    categories = [{name: "All", url: "https://dummyjson.com/products"} , ...categories]
    categories.forEach(category => {createCategory(category)})
}

const searchInput = document.querySelector('form input')

document.querySelector('form button').addEventListener('click', e => {
    e.preventDefault()
    if(searchInput.value === '') return

    fetchItems(`https://dummyjson.com/products/search?q=${searchInput.value}`, fetchTypes.products)
})

fetchItems(`https://dummyjson.com/products?limit=100`, fetchTypes.products)
fetchItems('https://dummyjson.com/products/categories', fetchTypes.categories)