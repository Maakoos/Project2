const headerItems = document.querySelector(".header").children;
const foodSection = document.querySelector(".food");
const restaurantSection = document.querySelector(".restaurant__header");
const restaurantImg = document.querySelector(".restaurant__img");
const chefsSection = document.querySelector(".chefs");
const menuSection = document.querySelector(".menu");
const reservationSection = document.querySelector(".reservation");
const reviewsSection = document.querySelector(".reviews");
const touchSection = document.querySelector(".touch");

const allItems = [
  ...headerItems,
  foodSection,
  restaurantSection,
  restaurantImg,
  chefsSection,
  menuSection,
  reservationSection,
  reviewsSection,
  touchSection,
];

const options = {
  root: null,
  threshold: 0.3,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn");
      observer.unobserve(entry.target);
    }
  });
}, options);

allItems.forEach((item) => {
  observer.observe(item);
});
