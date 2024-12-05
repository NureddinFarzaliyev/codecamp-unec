const exploreBtn = document.querySelector('.explore-nav-btn');
const searchBtn = document.querySelector('.search-nav-btn');
const wishlistBtn = document.querySelector('.wishlist-nav-btn');

const navBtns = [exploreBtn, searchBtn, wishlistBtn];

navBtns.forEach((btn) => {  
  btn.addEventListener('click', () => {
    navBtns.forEach((btn) => {
      btn.classList.remove('active');
        document.querySelector(`.${btn.classList[0].split('-')[0]}`).classList.add('hidden');
    });
    btn.classList.add('active');
    document.querySelector(`.${btn.classList[0].split('-')[0]}`).classList.remove('hidden');
  });
});