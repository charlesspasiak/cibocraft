import RestaurantDbSource from '../../data/restaurantsdb-source';
import { createRestaurantCardTemplate } from '../../templates/template-creator';

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
    
    listOfRestaurant.forEach((restaurant) => {
      const restaurantCard = createRestaurantCardTemplate(restaurant);
      restaurantContainer.innerHTML += restaurantCard;
    });
  },
};

export default Home;
