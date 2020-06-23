const menus = document.querySelectorAll(".menu__list");
console.log(menus);

const btns = document.querySelectorAll(".menu__btn");
console.log(btns);

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const category = e.target.dataset.category;
    const currentMenu = [...menus].filter(
      (item) => item.dataset.category === category
    );

    btns.forEach((item) => item.classList.remove("menu__btn--isActive"));
    menus.forEach((item) => item.classList.remove("menu__list--isVisible"));

    e.target.classList.add("menu__btn--isActive");
    currentMenu[0].classList.add("menu__list--isVisible");
  });
});
