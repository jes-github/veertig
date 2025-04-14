export async function initLeerkansDoorNieuweKansenSlider() {
  const container = document.getElementById("verhaal-leerkans-door-nieuwe-kansen");
  if (!container) return;

  try {
    const response = await fetch("src/leerkans-door-nieuwe-kansen.json");
    const data = await response.json();
    generateLeerkansDoorNieuweKansenSlider(data.slides);

    new Swiper(".leerkans-door-nieuwe-kansen-swiper", {
      loop: true,
      pagination: {
        el: ".leerkans-door-nieuwe-kansen-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".leerkans-door-nieuwe-kansen-swiper-next",
        prevEl: ".leerkans-door-nieuwe-kansen-swiper-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1280: { slidesPerView: 2, spaceBetween: 30 },
      },
    });
  } catch (error) {
    console.error("Error loading leerkans-door-nieuwe-kansen slider:", error);
  }

  function generateLeerkansDoorNieuweKansenSlider(slides) {
    let sliderHTML = `
      <h2 id="Leerkans door nieuwe kansen" class="mb-4 font-bold text-xl xl:text-4xl break-words leading-xl xl:leading-4xl">
        Leerkans door nieuwe kansen
      </h2>
      <div class="flex items-start py-8 pr-16">
        <img src="assets/images/swoosh.svg" alt="Swoosh" class="mt-4 mr-4 xl:py-8 w-16 h-auto" />
        <p class="xl:pt-8 xl:pr-16 xl:pb-16 font-semibold text-base xl:text-lg">
          Als jongere je weg mogen zoeken. Dat vinden we bij JES één van de mooiste cadeaus die je hen kan geven. Een cadeau dat uiteindelijk niet alleen onze jongeren zelf uitpakken, maar ook de buurt en de stad. Daar zijn onze workshops en opleidingen, trajecten naar duurzaam werk, geattesteerde cursussen, … sprekende voorbeelden van.
        </p>
      </div>
      <div class="swiper leerkans-door-nieuwe-kansen-swiper">
        <div class="swiper-wrapper">
    `;

    slides.forEach(slide => {
      sliderHTML += `
        <div class="swiper-slide">
          <div class="bg-white mb-4 border-3 border-black">
            <div class="relative overflow-hidden">
              <img src="${slide.image}" alt="Card Image" class="w-full" />
              <div class="absolute bottom-2 right-2 flex items-center px-4 py-0.5 font-bold">
                <img src="assets/images/pinpoint.svg" alt="Locatie" class="mr-2">${slide.location}
              </div>
            </div>
            <div class="px-4 pb-4">
              <p class="pt-4 pb-8">${slide.text}</p>
              <h2 id="${slide.title}" class="mb-2 font-bold text-lg">${slide.title}</h2>
              <a href="${slide.link}" class="top-8 right-0 relative bg-white px-2 py-0.5 border-3 border-black font-semibold text-lg">
                Lees Meer
              </a>
            </div>
          </div>
        </div>
      `;
    });

    sliderHTML += `
        </div>
      </div>

            <div class="hidden xl:flex flex-col items-center">
        <div class="flex justify-center xl:my-16 w-full leerkans-door-nieuwe-kansen-pagination"></div>
        <div class="flex justify-center items-center space-x-4">
          <button class="leerkans-door-nieuwe-kansen-swiper-prev">
            <img src="assets/images/Arrow - left.svg" alt="Vorige">
          </button>
          <button class="leerkans-door-nieuwe-kansen-swiper-next">
            <img src="assets/images/Arrow - right.svg" alt="Volgende">
          </button>
        </div>
      </div>

    <div class="relative xl:hidden">
      <div class="absolute -top-55 -translate-y-1/2 w-full flex justify-between items-center z-10 px-4">
        <button class="cursor-pointer leerkans-door-nieuwe-kansen-swiper-prev -ml-8">
          <img src="assets/images/Arrow - left.svg" alt="Vorige" />
        </button>
        <button class="cursor-pointer leerkans-door-nieuwe-kansen-swiper-next -mr-8">
          <img src="assets/images/Arrow - right.svg" alt="Volgende" />
        </button>
      </div>
    </div>
    `;

    container.innerHTML = sliderHTML;
  }
}
