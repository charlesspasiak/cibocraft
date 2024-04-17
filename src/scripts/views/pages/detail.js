import RestaurantDbSource from '../../data/restaurantsdb-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailOfRestauran(url.id);
    console.log(restaurant);
  },
};
 
export default Detail;
