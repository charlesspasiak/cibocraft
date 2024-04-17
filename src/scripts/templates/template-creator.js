import CONFIG from '../global/config';

// const createRestaurantItemTemplate = (restaurant) => `
//   <div class="restaurant-card">
//     <div class="image-container">
//       <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}>
//       <div class="city">${restaurant.city}</div>
//     </div>
//     <p class="rating">Rating: ${restaurant.rating}</p>
//     <h2>${restaurant.name}</h2>
//     <p>${restaurant.description}</p>
//   </div>
// `;

const createRestaurantItemTemplate = (restaurants, restaurantList) => {
  restaurants.forEach((restaurant) => {
    const restaurantCard = document.createElement('div');
    restaurantCard.classList.add('restaurant-card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.src = CONFIG.BASE_IMAGE_URL + restaurant.pictureId;
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
};

const createRestaurantDetailTemplate = (restaurant) => ``;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
