import RestaurantDbSource from '../../data/restaurantsdb-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="restaurant container" id="restaurant"></div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailOfRestauran(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};
 
export default Detail;
