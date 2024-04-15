import API_ENDPOINT from '../../scripts/global/api-endpoint';

class RestaurantDbSource {
  static async listOfRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailOfRestauran() {
    const response = await fetch(API_ENDPOINT.DETAIL);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantDbSource;