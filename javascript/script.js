// =======================================
// NAVBAR WITH MENU TOGGLE and STICKY
// =======================================

const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
const dropdowns = document.querySelectorAll(".dropdown");
const menuIcon = document.getElementById("menu-icon");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle the icon
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});

// Dropdown toggle for mobile view
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
});

// Navbar Sticky
window.onscroll = function () {
  const navbar = document.querySelector(".navbar_nav");
  const sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};


// =======================================
// SCROLL TO TOP BUTTON
// =======================================


document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    window.addEventListener("scroll", function () {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });


// =======================================
// MATCH CARD CONTENT
// =======================================


document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});



// =======================================
// CARD SLIDER
// =======================================


// let currentIndex = 0;

// function slide(direction) {
//     const cards = document.querySelector('.card-container');
//     const totalCards = document.querySelectorAll('.card').length;
//     const cardWidth = 25; // Each card is 25% of the width

//     currentIndex += direction;
//     if (currentIndex < 0) {
//         currentIndex = totalCards - 1; // Loop to last card
//     } else if (currentIndex >= totalCards) {
//         currentIndex = 0; // Loop to first card
//     }

//     cards.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
// }
