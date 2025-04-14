import { initGroeiDoorLatentTalentSlider } from "./sliders/groeiDoorLatentTalent.js";
import { initLeerkansDoorNieuweKansenSlider } from "./sliders/leerkansDoorNieuweKansen.js";
import { initOnthardenDoorOntmoetenSlider } from "./sliders/onthardenDoorOntmoeten.js";
import { initRuimteVoorRuimteSlider } from "./sliders/ruimteVoorRuimte.js";
import { initStemGevenZonderStempelSlider } from "./sliders/stemGevenZonderStempel.js";
import { initWelzijnDoorSpeelterreinSlider } from "./sliders/welzijnDoorSpeelterrein.js";
import { initWerkzaamheidsgraagSlider } from "./sliders/werkzaamheidsgraag.js";

document.addEventListener("DOMContentLoaded", function () {
	const sliderConfigs = [
		{ className: "welzijn-door-speelterrein-swiper" },
		{ className: "ruimte-voor-ruimte-swiper" },
		{ className: "werkzaamheidsgraag-swiper" },
		{ className: "leerkans-door-nieuwe-kansen-swiper" },
		{ className: "stem-geven-zonder-stempel-swiper" },
		{ className: "groei-door-latent-talent-swiper" },
		{ className: "ontharden-door-ontmoeten-swiper" }

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

	// Init specifieke sliders
	initWelzijnDoorSpeelterreinSlider();
	initRuimteVoorRuimteSlider();
	initWerkzaamheidsgraagSlider();
	initGroeiDoorLatentTalentSlider()
	initLeerkansDoorNieuweKansenSlider()
	initStemGevenZonderStempelSlider()
	initOnthardenDoorOntmoetenSlider()
});
