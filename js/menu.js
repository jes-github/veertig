const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuClose = document.getElementById("menu-close");

// Open the menu
menuToggle.addEventListener("click", function () {
	mobileMenu.classList.remove("hidden");
});

// Close the menu
menuClose.addEventListener("click", function () {
	mobileMenu.classList.add("hidden");
});
