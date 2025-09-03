document.addEventListener('DOMContentLoaded', function () {
	var menuToggle = document.getElementById("menu-toggle");
	var mobileMenu = document.getElementById("mobile-menu");
	var menuClose = document.getElementById("menu-close");
	var navbar = document.getElementById("navbar");

	function openMenu() {
		// Modern browsers: Tailwind transform classes
		if (mobileMenu.classList) {
			mobileMenu.classList.remove("-translate-y-full");
			mobileMenu.classList.add("translate-y-0");
		}
		// Fallback for old browsers
		mobileMenu.style.display = 'flex';
		if (navbar) { navbar.style.display = 'none'; }
	}

	function closeMenu() {
		if (mobileMenu.classList) {
			mobileMenu.classList.remove("translate-y-0");
			mobileMenu.classList.add("-translate-y-full");
		}
		mobileMenu.style.display = 'none';
		if (navbar) { navbar.style.display = 'flex'; }
	}

	if (menuToggle) menuToggle.onclick = openMenu;
	if (menuClose) menuClose.onclick = closeMenu;

	var links = mobileMenu.getElementsByTagName('a');
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = closeMenu;
	}
});
