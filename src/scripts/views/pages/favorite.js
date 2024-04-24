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
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        const restaurantCard = createRestaurantCardTemplate(restaurant);
        restaurantContainer.innerHTML += restaurantCard;
      });
    } else {
      restaurantContainer.innerHTML = `
        <div class="restaurant-item__not__found">
          Belum ada restaurant yand disukai!!!
        </div>
      `;
    }
  },
};

export default Favorite;
