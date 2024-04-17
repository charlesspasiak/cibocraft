import RestaurantDbSource from '../../data/restaurantsdb-source';
import { createRestaurantItemTemplate } from '../../templates/template-creator';

const Home = {
  async render() {
    return `
      <article class="restaurant container">
        <h2 id="explore">Explore Restaurant</h2>
        <div class="restaurant-list" id="restaurantList"></div>
      </article>
    `;
  },

  async afterRender() {
    const listOfRestaurant = await RestaurantDbSource.listOfRestaurant();
    const restaurantContainer = document.querySelector('#restaurantList');
    createRestaurantItemTemplate(listOfRestaurant, restaurantContainer);
  },
};

export default Home;
