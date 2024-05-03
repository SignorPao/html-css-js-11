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
  console.log("logo");
  if (mobileMenuList.classList.contains("active")) {
    mobileMenuList.classList.remove("active");
    bar.forEach((i) => i.classList.remove("active"));
    mobileMenuButton.classList.remove("change-bg");
  }
});
