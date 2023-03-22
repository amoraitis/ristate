document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling
  const links = document.querySelectorAll("nav ul li a");
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }

  // Mobile menu
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "☰";
  menuBtn.classList.add("menu-btn");
  const nav = document.querySelector("nav");
  nav.insertBefore(menuBtn, nav.children[0]);
  const menu = document.querySelector("nav ul");

  menuBtn.addEventListener("click", function() {
    menu.classList.toggle("open");
  });
});
