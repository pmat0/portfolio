import "./scss/hamburgers.scss";
import "./scss/general.scss"
import "./scss/style.scss";

const burgerBtn = document.querySelector(".hamburger") as HTMLButtonElement;
const mobileNav = document.querySelector(".mobile-nav") as HTMLDivElement;
const mobileNavItems = document.querySelectorAll(".mobile-nav__item");

function handleNav() {
  mobileNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      burgerBtn.classList.remove("is-active");
      mobileNav.classList.remove("mobile-nav--is-opened");
    });
  });
  burgerBtn.classList.toggle("is-active");

  burgerBtn.classList.contains("is-active")
    ? mobileNav.classList.add("mobile-nav--is-opened")
    : mobileNav.classList.remove("mobile-nav--is-opened");
}

burgerBtn.addEventListener("click", handleNav);