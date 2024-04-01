import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

console.log('Hello Coders! :)');

// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('.nav__list');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// Fetch data from JSON file
fetch('../public/data/DATA.json')
  .then((response) => response.json())
  .then((data) => {
    const restaurants = data.restaurants;
    const restaurantList = document.getElementById('restaurantList');

    // Iterate through each restaurant
    restaurants.forEach((restaurant) => {
      // Create restaurant card element
      const restaurantCard = document.createElement('div');
      restaurantCard.classList.add('restaurant-card');

      // Create image element
      const image = document.createElement('img');
      image.src = restaurant.pictureId;
      image.alt = restaurant.name;

      // Create heading element
      const heading = document.createElement('h2');
      heading.textContent = restaurant.name;

      // Create paragraph element for description
      const description = document.createElement('p');
      description.textContent = restaurant.description;

      // Create paragraph element for rating
      const rating = document.createElement('p');
      rating.classList.add('rating');
      rating.textContent = `Rating: ${restaurant.rating}`;

      // Append elements to restaurant card
      restaurantCard.appendChild(image);
      restaurantCard.appendChild(heading);
      restaurantCard.appendChild(description);
      restaurantCard.appendChild(rating);

      // Append restaurant card to restaurant list
      restaurantList.appendChild(restaurantCard);
    });
  })
  .catch((error) => console.error('Error fetching data:', error));
