const toggleButton = document.querySelector(".menu-toggle");
const navContainer = document.querySelector(".nav-container");

toggleButton.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});
