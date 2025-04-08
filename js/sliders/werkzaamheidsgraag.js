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
        640: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 2, spaceBetween: 30 },
      },
    });
  } catch (error) {
    console.error("Error loading werkzaamheidsgraag slider:", error);
  }

  function generateWerkzaamheidsGraagSlider(slides) {
    let sliderHTML = `
      <h2 werkzaamheidsgraag class="mb-4 font-bold text-xl lg:text-4xl break-words leading-xl lg:leading-4xl">
        Werkzaamheidsgraaaaaaag
      </h2>
      <div class="flex items-start py-8 pr-16">
        <img src="assets/images/swoosh.svg" alt="Swoosh" class="mt-4 mr-4 lg:py-8 w-16 h-auto" />
        <p class="lg:pt-8 lg:pr-16 lg:pb-16 font-semibold text-base lg:text-lg">
          Inspirerende projecten rond ruimte en herbestemming. Bekijk hier enkele voorbeelden.
        </p>
      </div>
      <div class="swiper werkzaamheidsgraag-swiper">
        <div class="swiper-wrapper">
    `;

    slides.forEach(slide => {
      sliderHTML += `
          <div class="swiper-slide">
            <div class="bg-white mb-4 border-3 border-black card">
              <div class="overflow-hidden">
                <img src="${slide.image}" alt="Card Image" class="w-full" />
              </div>
              <div class="px-4 pb-4 relative">
                <div class="right-4 bottom-70 absolute flex justify-end my-auto px-4 py-0.5 font-bold">
                  <img src="assets/images/pinpoint.svg" alt="Locatie" class="mr-2">${slide.location}
                </div>
                <p class="pt-4 pb-8">${slide.text}</p>
                <h2 class="mb-2 font-bold text-lg">${slide.title}</h2>
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

      <div class="hidden lg:flex flex-col items-center">
        <div class="flex justify-center lg:my-16 w-full werkzaamheidsgraag-pagination"></div>
        <div class="flex justify-center items-center space-x-4">
          <button class="werkzaamheidsgraag-swiper-prev">
            <img src="assets/images/Arrow - left.svg" alt="Vorige">
          </button>
          <button class="werkzaamheidsgraag-swiper-next">
            <img src="assets/images/Arrow - right.svg" alt="Volgende">
          </button>
        </div>
      </div>

    <div class="relative lg:hidden">
      <div class="absolute -top-55 -translate-y-1/2 w-full flex justify-between items-center z-10 px-4">
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
