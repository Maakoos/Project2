const btnBox = document.querySelector(".hamburger");

// hamburger, open/close Menu
const hamburgerBtn = document.querySelector(".hamburger__line");

const menu = document.querySelector(".navigation__list");

const menuLinks = document.querySelectorAll(".navigation__link");
let time = 0;

btnBox.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger__line--isOpen");
  if (!hamburgerBtn.classList.contains("hamburger__line--isOpen")) {
    time = 0;
    menuLinks.forEach((item) => {
      setTimeout(() => {
        item.classList.remove("navigation__link--showIn");
      }, time);
      time += 200;
    });

    setTimeout(() => {
      menu.classList.remove("navigation__list--isOpen");
      console.log("po wszystkim");
    }, 1500);
  }
  menuLinks.forEach((item) => {
    if (!hamburgerBtn.classList.contains("hamburger__line--isOpen")) {
      time = 0;
    }
    if (hamburgerBtn.classList.contains("hamburger__line--isOpen")) {
      menu.classList.add("navigation__list--isOpen");
      setTimeout(() => {
        item.classList.add("navigation__link--showIn");
      }, time);
      time += 200;
    }
  });
});
