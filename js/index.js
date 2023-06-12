// Изменят тему со светлой на темную

// Дом узлы
const inputThemeSwitchRef = document.querySelector(".theme-switch__toggle");
const bodyRef = document.querySelector("body");
const btnBurgerRef = document.querySelector(".btn-burger-js");
const headerMenuMobRef = document.querySelector(".header-menu-mob-js");

// Cлушатели
inputThemeSwitchRef.addEventListener("change", changeTheme);
btnBurgerRef.addEventListener("click", addedClass);

const Theme = {
  DARK: "dark-theme",
};

const dataW = [
  { id: 1, uk: "Раздеватся", en: "undress" },
  { id: 2, uk: "Примерять", en: "try on" },
  { id: 4, uk: "Одевать", en: "put on" },
];

function changeTheme(e) {
  if (e.target.checked) {
    // запысываем в локал.хран тема черная
    localStorage.setItem("Theme", JSON.stringify(Theme.DARK));
    localStorage.setItem("dataW", JSON.stringify(dataW));
    const getItemTheme = localStorage.getItem("Theme");

    const getData = localStorage.getItem("dataW");

    if (getItemTheme) {
      bodyRef.classList.add("dark-theme");
    }
  } else {
    localStorage.removeItem("Theme");
    bodyRef.classList.remove("dark-theme");
  }
}

if (localStorage.getItem("Theme")) {
  bodyRef.classList.add("dark-theme");
  inputThemeSwitchRef.checked = true;
}

function addedClass(e) {
  console.log(e);
  e.target.classList.toggle("header__item-icon-btn--active");
  headerMenuMobRef.classList.toggle("header-menu-mob--active");
  bodyRef.classList.toggle("body__no-scrol");
}
