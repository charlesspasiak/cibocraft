import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantCardTemplate } from '../../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <article class="restaurant container">
        <h2 id="favorite">Your Favorite Restaurant</h2>
        <div class="restaurant-list" id="restaurantList"></div>
      </article>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurantList');

    restaurants.forEach((restaurant) => {
      const restaurantCard = createRestaurantCardTemplate(restaurant);
      restaurantContainer.innerHTML += restaurantCard;
    });
  },
};

export default Favorite;
