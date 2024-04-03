import DATA from '../../scripts/../public/data/DATA.json';

const restaurantList = document.getElementById('restaurantList');
const restaurants = DATA.restaurants;

restaurants.forEach((restaurant) => {
  const restaurantCard = document.createElement('div');
  restaurantCard.classList.add('restaurant-card');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const image = document.createElement('img');
  image.src = restaurant.pictureId;
  image.alt = restaurant.name;

  const city = document.createElement('div');
  city.classList.add('city');
  city.textContent = restaurant.city;

  imageContainer.appendChild(image);
  imageContainer.appendChild(city);

  const heading = document.createElement('h2');
  heading.textContent = restaurant.name;

  const description = document.createElement('p');
  description.textContent = restaurant.description;

  const rating = document.createElement('p');
  rating.classList.add('rating');
  rating.textContent = `Rating: ${restaurant.rating}`;

  restaurantCard.appendChild(imageContainer);
  restaurantCard.appendChild(rating);
  restaurantCard.appendChild(heading);
  restaurantCard.appendChild(description);

  restaurantList.appendChild(restaurantCard);
});
