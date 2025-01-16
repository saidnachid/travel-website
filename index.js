let togglers = document.querySelectorAll("[data-toggler]");
let overlay = document.querySelector("[data-overlay]");
let navbar = document.querySelector("[data-navbar]");
let header = document.querySelector("[data-header]");

function addEventOnElements(elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

function toggleNavabr() {
  overlay.classList.toggle("active");
  navbar.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElements(togglers, "click", toggleNavabr);

window.addEventListener("scroll", () => {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});
