document.addEventListener('DOMContentLoaded', function () {
	var menuToggle = document.getElementById("menu-toggle");
	var mobileMenu = document.getElementById("mobile-menu");
	var menuClose = document.getElementById("menu-close");
	var navbar = document.getElementById("navbar");

	// Zorg dat het menu standaard verborgen is
	if (mobileMenu) mobileMenu.style.display = "none";

	if (menuToggle) {
		menuToggle.onclick = function () {
			if (mobileMenu.style.display === "none") {
				mobileMenu.style.display = "flex"; // toon menu
				if (navbar) navbar.style.display = "none";
			} else {
				mobileMenu.style.display = "none"; // verberg menu
				if (navbar) navbar.style.display = "flex";
			}
		};
	}

	if (menuClose) {
		menuClose.onclick = function () {
			mobileMenu.style.display = "none";
			if (navbar) navbar.style.display = "flex";
		};
	}

	// links sluiten het menu
	var links = mobileMenu.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function () {
			mobileMenu.style.display = "none";
			if (navbar) navbar.style.display = "flex";
		};
	}
});
