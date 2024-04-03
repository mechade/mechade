'use strict';

/**
 * Navbar toggle
 */
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * Toggle the navbar when clicking any navbar link
 */
const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function (event) {
    const sectionId = this.getAttribute('href'); // Get the section id
    const section = document.querySelector(sectionId); // Find the section by id
    section.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
    header.classList.remove("nav-active"); // Close the navbar
    navToggleBtn.classList.remove("active"); // Remove active class from the toggle button
    
    if (this.getAttribute('href') === "#blog") {
      // If the clicked link is the "Blog" button, redirect to blog.html
      event.preventDefault(); // Prevent the default link behavior
      const blogPageURL = "blog.html"; // Replace "blog.html" with the URL of your blog page
      window.location.href = blogPageURL; // Redirect to the blog page
    }
  });
}

/**
 * Back to top & header
 */
const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
