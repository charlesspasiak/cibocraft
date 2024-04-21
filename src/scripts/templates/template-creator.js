import CONFIG from '../global/config';

const createRestaurantCardTemplate = (restaurant) => `
  <div class="restaurant-card">
    <div class="image-container">
      <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="city">${restaurant.city}</div>
    </div>
    <p class="rating">Rating: ${restaurant.rating}</p>
    <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <div class="restaurant-detail__header">
      <div class="image-container">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="city">${restaurant.city}</div>
      </div>
      <div class="restaurant-detail__header__info">
        <p class="restaurant-detail__header__info__rating">Rating: ${restaurant.rating}</p>
        <div class="restaurant-detail__header__info__categories">
            ${restaurant.categories.map((category) => `<span>${category.name}</span>`).join('')}
        </div>
        <h2>${restaurant.name}</h2>
        <p class="restaurant-detail__header__info__address">${restaurant.address}</p>
        <p class="restaurant-detail__header__info__desc">${restaurant.description}</p>
      </div>
    </div>
    <div class="restaurant-detail__content">
      <h3>Menu</h3>
      <div class="restaurant-detail__content__menu">
        <div class="restaurant-detail__content__menu__foods">
          <div>
            <h4>Foods</h4>
            <ul>
              ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="restaurant-detail__content__menu__drinks">
          <div>
            <h4>Drinks</h4>
            <ul>
              ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="restaurant-detail__review">
      <h3>Customer Reviews</h3>
      <div class="restaurant-detail__content__reviews">
        <div class="restaurant-detail__content__reviews__item">
          ${restaurant.customerReviews
            .map(
              (customerReview) => `
            <div class="review-box">
              <p><strong>${customerReview.name}</strong></p>
              <p class="restaurant-detail__content__reviews__item__date">${customerReview.date}</p>
              <p class="restaurant-detail__content__reviews__item__review">${customerReview.review}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantCardTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
