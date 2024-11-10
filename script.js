const images = [
  "./images/pageee2.png",
  "./images/pageee3.png",
  "./images/pageee1.png",
  "./images/pageee2.png",
];

let imageIndex = 0;
const imageElement = document.getElementById("image-slider");

function changeImage() {
  imageElement.src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
}

setInterval(changeImage, 4000); // Automatically change image every 4 seconds

document.getElementById("next").addEventListener("click", () => {
  imageIndex = (imageIndex + 1) % images.length;
  imageElement.src = images[imageIndex];
});

document.getElementById("prev").addEventListener("click", () => {
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  imageElement.src = images[imageIndex];
});

document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const halfPageHeight = document.body.scrollHeight / 4;

  if (window.scrollY >= halfPageHeight) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
});

// Toggle search dropdown on desktop view
const searchIcon = document.getElementById("search-icon");
const searchDropdown = document.getElementById("search-dropdown");

searchIcon.addEventListener("click", () => {
  if (window.innerWidth > 768) {
    searchDropdown.style.display =
      searchDropdown.style.display === "block" ? "none" : "block";
  }
});

// Hide search dropdown when clicking outside
window.addEventListener("click", (e) => {
  if (!searchDropdown.contains(e.target) && e.target !== searchIcon) {
    searchDropdown.style.display = "none";
  }
});

// Sidebar toggle for mobile view
const menuIcon = document.querySelector(".menu-icon span");
const sidebar = document.querySelector(".sidebar");
const sidebarCloseBtn = document.querySelector(".sidebar .close-btn");

// Open sidebar when menu icon is clicked
menuIcon.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// Close sidebar when close button is clicked
sidebarCloseBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Cart slider toggle functionality
const cartIcon = document.querySelector(".cart-icon");
const cartSlider = document.getElementById("cart-slider");
const cartCloseBtn = document.querySelector("#cart-slider .close-btn");

// Open cart slider when cart icon is clicked
cartIcon.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default behavior if it's an anchor tag
  cartSlider.style.right = "0";
});

// Close cart slider when close button is clicked
cartCloseBtn.addEventListener("click", () => {
  cartSlider.style.right = "-100%";
});

// Optional: Close sidebar if clicked outside of it
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});

// Optional: Close cart slider if clicked outside of it
document.addEventListener("click", (e) => {
  if (!cartSlider.contains(e.target) && !cartIcon.contains(e.target)) {
    cartSlider.style.right = "-100%";
  }
});

const demosLink = document.querySelector(".demos-hover");
const iframeContainer = document.getElementById("iframeContainer");
let hideTimeout; // Variable to store timeout for hiding

// Show iframe when hovering over the "Demos" link
demosLink.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout); // Clear any scheduled hiding
  iframeContainer.classList.remove("hidden");
});

// Keep iframe visible when hovering over it
iframeContainer.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout);
  iframeContainer.classList.remove("hidden");
});

// Schedule hiding iframe when leaving "Demos" link
demosLink.addEventListener("mouseleave", () => {
  hideTimeout = setTimeout(() => {
    iframeContainer.classList.add("hidden");
  }, 300); // Adjust delay as needed
});

// Schedule hiding iframe when leaving the iframe itself
iframeContainer.addEventListener("mouseleave", () => {
  hideTimeout = setTimeout(() => {
    iframeContainer.classList.add("hidden");
  }, 300); // Adjust delay as needed
});
