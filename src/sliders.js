document.addEventListener("DOMContentLoaded", function () {
	const sliderConfigs = [
		{ className: "welzijn-door-speelterrein-swiper" },
		{ className: "ruimte-voor-ruimte-swiper" },
		{ className: "werkzaamheidsgraag-swiper" },
		{ className: "leerkans-door-nieuwe-kansen-swiper" },
		{ className: "stem-geven-zonder-stempel-swiper" },
		{ className: "groei-door-latent-talent-swiper" }
	];

	sliderConfigs.forEach(config => {
		new Swiper(`.${config.className}`, {
			direction: "horizontal",
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			pagination: {
				el: `.${config.className.replace("swiper", "pagination")}`,
				clickable: true,
			},
			navigation: {
				nextEl: `.${config.className}-next`,
				prevEl: `.${config.className}-prev`,
			},
			breakpoints: {
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: config.slidesPerView1024 || 2,
					spaceBetween: 30,
				},
			},
		});
	});
});
