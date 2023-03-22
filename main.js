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
  
  // Smooth scrolling for anchor links
  const anchors = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  }

  // Scroll to top button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerText = '⬆';
  scrollToTopButton.style.position = 'fixed';
  scrollToTopButton.style.bottom = '20px';
  scrollToTopButton.style.right = '20px';
  scrollToTopButton.style.padding = '10px';
  scrollToTopButton.style.fontSize = '24px';
  scrollToTopButton.style.cursor = 'pointer';
  scrollToTopButton.style.display = 'none';
  scrollToTopButton.id = 'scrollToTop';

  scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  document.body.appendChild(scrollToTopButton);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
});
