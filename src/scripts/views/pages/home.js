import RestaurantDbSource from '../../data/restaurantsdb-source';
import { createRestaurantCardTemplate } from '../../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg">
          <img src="./images/heros/hero-image_4-large.jpg" alt="Hero Image" class="hero-background">
        </picture>
        <div class="hero-content">
          <h1>Welcome to Cibo Craft</h1>
          <p>Your ultimate destination for exploring a delectable world of culinary delights!</p>
          <a href="#explore" class="btn">Explore Now</a>
        </div>
      </div>
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
