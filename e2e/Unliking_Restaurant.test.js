const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Belum ada restaurant yand disukai!!!', '.restaurant-item__not__found');

  const likedRestaurantTitles = [];

  for (let i = 1; i <= 3; i++) {
    I.amOnPage('/');
    I.seeElement('.restaurant__title a');
    const restaurantLink = locate('.restaurant__title a').at(i);
    const restaurantTitle = await I.grabTextFrom(restaurantLink);
    I.click(restaurantLink);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    likedRestaurantTitles.push(restaurantTitle);
  }

  I.amOnPage('/#/favorite');
  for (const title of likedRestaurantTitles) {
    I.seeElement('.restaurant-item');
    I.see(title, '.restaurant__title');
  }

  const firstRestaurantTitle = likedRestaurantTitles[0];
  I.click(locate('.restaurant__title a').withText(firstRestaurantTitle));
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSee(firstRestaurantTitle, '.restaurant__title');
});
