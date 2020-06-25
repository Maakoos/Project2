const items = document.querySelectorAll(".services__item");
console.log(items);

let delay = 0;

const options = {
  root: null,
  threshold: 1,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // entry.target.classList.add("swingIn");
      setTimeout(() => {
        entry.target.classList.add("swingIn");
      }, delay);
      observer.unobserve(entry.target);
      delay += 300;
    }
  });
}, options);

items.forEach((item) => {
  observer.observe(item);
});
