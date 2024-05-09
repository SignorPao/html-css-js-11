const mobileMenuButton = document.querySelector(".nav__buttons-menu"),
  mobileMenuList = document.querySelector(".mobile__navigation-container"),
  bar = document.querySelectorAll(".bar"),
  logo = document.querySelector(".logo");

// burger button handlers
mobileMenuButton.addEventListener("click", () => {
  mobileMenuList.classList.toggle("active");
  mobileMenuList.classList.contains("active")
    ? bar.forEach((i) => i.classList.add("active"))
    : bar.forEach((i) => i.classList.remove("active"));
  mobileMenuList.classList.contains("active")
    ? mobileMenuButton.classList.add("change-bg")
    : mobileMenuButton.classList.remove("change-bg");
});

// logo handlers(remove mobile menu & burger btn styles)
logo.addEventListener("click", () => {
  if (mobileMenuList.classList.contains("active")) {
    mobileMenuList.classList.remove("active");
    bar.forEach((i) => i.classList.remove("active"));
    mobileMenuButton.classList.remove("change-bg");
  }
});

// this year
let timeContainer = document.querySelector(".author time"),
  thisYear = new Date().getFullYear();
if (thisYear > 2024) {
  timeContainer.innerHTML = `2024 - ${thisYear}.`;
}

// scroll to top
const scrollUp = () => {
  const scrollUp = document.querySelector(".scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
