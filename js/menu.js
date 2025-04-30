document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.getElementById("menu-toggle");
	const mobileMenu = document.getElementById("mobile-menu");
	const menuClose = document.getElementById("menu-close");
	const navbar = document.getElementById("navbar");

	menuToggle.addEventListener("click", function () {
		mobileMenu.classList.remove("-translate-y-full");
		mobileMenu.classList.add("translate-y-0");
		navbar.classList.add("hidden");
	});

	menuClose.addEventListener("click", function () {
		mobileMenu.classList.remove("translate-y-0");
		mobileMenu.classList.add("-translate-y-full");
		navbar.classList.remove("hidden");
	});

	document.querySelectorAll('#mobile-menu a').forEach(link => {
		link.addEventListener('click', () => {
			mobileMenu.classList.remove('translate-y-0');
			mobileMenu.classList.add('-translate-y-full');
			navbar.classList.remove('hidden');
		});
	});
});


