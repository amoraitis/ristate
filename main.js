var addEvents = function () {
  // Smooth scrolling
  const links = document.querySelectorAll("nav ul li a");
  for (const link of links) {
    if ($(link).attr("href").startsWith("#")) {
      link.addEventListener("click", clickHandler);
    }
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    if (href.startsWith("#")) {

      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  }

  // Mobile menu
  const menuBtn = document.createElement("button");
  menuBtn.textContent = "☰";
  menuBtn.classList.add("menu-btn");
  const nav = document.querySelector("nav");
  nav.insertBefore(menuBtn, nav.children[0]);
  const menu = document.querySelector("nav ul");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("open");
  });

  // Smooth scrolling for anchor links
  const anchors = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  for (let anchor of anchors) {
    if ($(anchor).attr("href").startsWith("#")) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        if (href.startsWith("#")) {
          document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
          });
        }
      });
    }
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

  const authModal = document.getElementById('authModal');
  const closeBtn = document.querySelector('.close');
  const signUpBtn = document.getElementById('signUpBtn');
  const switchToSignUp = document.getElementById('switchToSignUp');
  const switchToSignIn = document.getElementById('switchToSignIn');
  const signInDiv = document.getElementById('signIn');
  const signUpDiv = document.getElementById('signUp');

  signUpBtn.addEventListener('click', () => {
    authModal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    authModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === authModal) {
      authModal.style.display = 'none';
    }
  });

  switchToSignUp.addEventListener('click', () => {
    signInDiv.style.display = 'none';
    signUpDiv.style.display = 'block';
  });

  switchToSignIn.addEventListener('click', () => {
    signInDiv.style.display = 'block';
    signUpDiv.style.display
    signUpDiv.style.display = 'none';
  });

  $("#btSignUp").click(function (e) {
    e.preventDefault();
    var userType = $("#userType")[0].value;

    if (userType === "investor") {
      window.location.href = window.location.origin + "/properties/signup-investor.html"
    }
    else if (userType === "property-owner") {
      window.location.href = window.location.origin + "/properties/signup-owner.html"
    }
  });

  $(".cta .properties").click(function (e) {
    e.preventDefault();
    window.location.href = window.location.origin + "properties/available.html";
  })
};
