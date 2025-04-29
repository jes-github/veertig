export async function initWerkzaamheidsgraagSlider() {
  const container = document.getElementById("verhaal-werkzaamheidsgraag");
  if (!container) return;

  try {
    const response = await fetch("src/werkzaamheidsgraag.json");
    const data = await response.json();
    generateWerkzaamheidsGraagSlider(data.slides);

    new Swiper(".werkzaamheidsgraag-swiper", {
      loop: true,
      pagination: {
        el: ".werkzaamheidsgraag-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".werkzaamheidsgraag-swiper-next",
        prevEl: ".werkzaamheidsgraag-swiper-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1280: { slidesPerView: 2, spaceBetween: 30 },
      },
      lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: true,
      },
      watchSlidesProgress: true,
    });
  } catch (error) {
    console.error("Error loading werkzaamheidsgraag slider:", error);
  }

  function generateWerkzaamheidsGraagSlider(slides) {
    let sliderHTML = `
      <h2 id="Werkzaamheidsgraag" werkzaamheidsgraag class="mb-8 font-bold text-xl xl:text-4xl break-words leading-xl xl:leading-4xl">
        Werkzaamheids&shy;graag
      </h2>
      <div class="flex items-start pr-16">
        <img src="assets/images/swoosh.svg" alt="Swoosh" class="mt-4 mr-4 xl:py-8 w-16 h-auto" />
        <p class="mb-8 xl:pt-8 xl:pr-16 xl:pb-16 font-semibold text-base xl:text-lg">
          Duurzaam werk vertrekt vanuit passie. JES gelooft hard in een traject waarbij de interesse van jongeren centraal staat in de zoektocht naar een job. En dat loont.
        </p>
      </div>
      <div class="swiper werkzaamheidsgraag-swiper">
        <div class="swiper-wrapper">
    `;

    slides.forEach(slide => {
      sliderHTML += `
        <div class="swiper-slide">
          <div class="bg-white mb-4 max-lg:mx-8 border-3 border-black">
            <div class="relative overflow-hidden">
              <img src="${slide.image}" alt="Card Image" class="w-full swiper-lazy" />
              <div class="absolute bottom-2 right-2 flex items-center px-4 py-0.5 font-bold text-white">
                <img src="assets/images/pinpoint.svg" alt="Locatie" class="mr-2">${slide.location}
              </div>
            </div>
            <div class="swiper-lazy-preloader"></div>
            <div class="px-4">
              <p class="pt-4 pb-4">${slide.text}</p>
              <h2 id="${slide.title}" class="mb-2 font-bold text-xl">${slide.title}</h2>
              ${slide.link ? `<a href="${slide.link}" target="_blank" class="top-3 right-0 relative bg-white px-4 py-1 border-3 border-black font-semibold text-md">
                Lees meer
              </a>` : ''}
            </div>
          </div>
        </div>
      `;
    });

    sliderHTML += `
        </div>
      </div>

      <div class="hidden xl:flex flex-col items-center">
        <div class="flex justify-center xl:my-16 w-full werkzaamheidsgraag-pagination"></div>
        <div class="flex justify-center items-center space-x-4">
          <button class="werkzaamheidsgraag-swiper-prev">
            <img src="assets/images/Arrow - left.svg" alt="Vorige">
          </button>
          <button class="werkzaamheidsgraag-swiper-next">
            <img src="assets/images/Arrow - right.svg" alt="Volgende">
          </button>
        </div>
      </div>

    <div class="relative xl:hidden">
      <div class="absolute -top-90 -translate-y-1/2 w-full flex justify-between items-center z-10 px-4">
        <button class="cursor-pointer werkzaamheidsgraag-swiper-prev -ml-8">
          <img src="assets/images/Arrow - left.svg" alt="Vorige" />
        </button>
        <button class="cursor-pointer werkzaamheidsgraag-swiper-next -mr-8">
          <img src="assets/images/Arrow - right.svg" alt="Volgende" />
        </button>
      </div>
    </div>
    `;

    container.innerHTML = sliderHTML;
  }
}
