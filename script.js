// Get the elements
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

// Add click event listener to hamburger
hamburger.addEventListener("click", () => {
  // Toggle the 'active' class on the nav menu
  navMenu.classList.toggle("active");

  // Optional: Change hamburger icon to 'X'
  const icon = hamburger.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Optional: Close the menu when a link is clicked
document.querySelectorAll(".nav-links li a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const icon = hamburger.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
});
