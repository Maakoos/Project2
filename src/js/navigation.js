const btnBox = document.querySelector(".hamburger");

// hamburger, open/close Menu
const hamburgerBtn = document.querySelector(".hamburger__line");

const menu = document.querySelector(".navigation__list");

const menuLinks = document.querySelectorAll(".navigation__link");
let time = 0;

// handling Menu
const handlingMenu = () => {
  time = 0;
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
};

btnBox.addEventListener("click", handlingMenu);

// close Menu
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    time = 0;
    hamburgerBtn.classList.remove("hamburger__line--isOpen");
    menuLinks.forEach((item) => {
      setTimeout(() => {
        item.classList.remove("navigation__link--showIn");
      }, time);
      time += 100;
    });
    setTimeout(() => {
      menu.classList.remove("navigation__list--isOpen");
    }, 1200);
  });
});

// Heder sticky
const header = document.querySelector(".navigation");
const logo = document.querySelector(".navigation__logo");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    header.classList.add("navigation--sticky");
    logo.classList.add("navigation__logo--sticky");
  } else {
    header.classList.remove("navigation--sticky");
    logo.classList.remove("navigation__logo--sticky");
  }
}
