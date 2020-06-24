const quotes = document.querySelectorAll(".reviews__quoteItem");

const btns = document.querySelectorAll(".reviews__dot");

let index = 0;

const chooseSlide = (e) => {
  const currentDot = e.target;
  const current = e.target.dataset.quote;
  const currentQuote = [...quotes].filter(
    (item) => item.dataset.quote === current
  );
  btns.forEach((btn) => btn.classList.remove("reviews__dot--isActive"));
  currentDot.classList.add("reviews__dot--isActive");

  quotes.forEach((quote) =>
    quote.classList.remove("reviews__quoteItem--showIn")
  );
  currentQuote[0].classList.add("reviews__quoteItem--showIn");

  index = current;
};

btns.forEach((btn) => btn.addEventListener("click", chooseSlide));

const autoSlider = () => {
  if (index > quotes.length - 1) {
    index = 0;
  }

  btns.forEach((btn) => btn.classList.remove("reviews__dot--isActive"));
  btns[index].classList.add("reviews__dot--isActive");

  quotes.forEach((quote) =>
    quote.classList.remove("reviews__quoteItem--showIn")
  );
  quotes[index].classList.add("reviews__quoteItem--showIn");
  index++;
  setTimeout(autoSlider, 5000);
};

autoSlider();

// Set slider height
const sliderItem = document.querySelector(".reviews__quoteItem");
const dotsBox = document.querySelector(".reviews__dots");

const getSliderItemHeight = () => {
  const sliderItemHeight = sliderItem.offsetHeight;
  dotsBox.style.marginTop = `${sliderItemHeight + 40}px`;
};

getSliderItemHeight();
window.addEventListener("resize", getSliderItemHeight);
