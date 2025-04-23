export async function initOnthardenDoorOntmoetenSlider() {
    const container = document.getElementById("verhaal-ontharden-door-ontmoeten");
    if (!container) return;

    try {
        const response = await fetch("src/ontharden-door-ontmoeten.json");
        const data = await response.json();
        generateOnthardenDoorOntmoetenSlider(data.slides);

        new Swiper(".ontharden-door-ontmoeten-swiper", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".ontharden-door-ontmoeten-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".ontharden-door-ontmoeten-swiper-next",
                prevEl: ".ontharden-door-ontmoeten-swiper-prev",
            },
            breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1280: { slidesPerView: 2.5, spaceBetween: 30 },
            },
            lazy: {
                loadPrevNext: true,
                loadOnTransitionStart: true,
            },
            watchSlidesProgress: true,
        });
    } catch (error) {
        console.error("Error loading ontharden-door-ontmoeten slider:", error);
    }

    function generateOnthardenDoorOntmoetenSlider(slides) {
        let sliderHTML = `
            <div class="xl:w-5/12">
                <h2 id="Ontharden door ontmoeten" class="font-bold text-xl xl:text-4xl leading-xl xl:leading-4xl">Ontharden door ontmoeten</h2>
                <div class="flex items-start py-8 pr-16">
                    <img src="assets/images/swoosh.svg" alt="Swoosh" class="mt-4 mr-4 w-16 h-auto" />
                    <p class="font-semibold xl:text-lg">
                        Bruggen bouwen. Tussen jongeren en de buurt, tussen jongeren en werkgevers, tussen jongeren en politie, tussen jongeren en het beleid, tussen jongeren onderling, … als ontmoetingsplek gelooft JES dat je sterke steden samen bouwt. Hoe krijgen we dat voor mekaar?
                    </p>
                </div>
                <div class="hidden xl:flex items-center space-x-16 ml-22">
                    <div class="flex items-center space-x-4 mt-6">
                        <button class="cursor-pointer ontharden-door-ontmoeten-swiper-prev">
                            <img src="assets/images/Arrow - left.svg" alt="Vorige">
                        </button>
                        <button class="cursor-pointer ontharden-door-ontmoeten-swiper-next">
                            <img src="assets/images/Arrow - right.svg" alt="Volgende">
                        </button>
                    </div>
                    <div class="hidden xl:block mt-8 ontharden-door-ontmoeten-pagination"></div>
                </div>
                <div class="relative xl:hidden">
                    <div class="absolute top-55 left-0 w-full h-full flex justify-between items-center z-10">
                        <button class="cursor-pointer ontharden-door-ontmoeten-swiper-prev">
                            <img src="assets/images/Arrow - left.svg" alt="Vorige">
                        </button>
                        <button class="cursor-pointer ontharden-door-ontmoeten-swiper-next">
                            <img src="assets/images/Arrow - right.svg" alt="Volgende">
                        </button>
                    </div>
                    <div class="hidden xl:block mt-8 ontharden-door-ontmoeten-pagination"></div>
                </div>
            </div>
            <div class="w-full xl:w-7/12 overflow-visible">
                <div class="overflow-visible swiper ontharden-door-ontmoeten-swiper">
                    <div class="swiper-wrapper">`;

        slides.forEach(slide => {
            sliderHTML += `
                        <div class="swiper-slide">
                            <div class="card">
                                <div class="xl:block flex justify-center">
                                    <div class="aspect-h-1 aspect-w-1">
                                        <img src="${slide.image}" alt="${slide.title}" 
                                         class="swiper-lazy rounded-full max-md:w-100 max-md:h-100 w-80 h-80" />
                                    </div>
                                </div>
                                <div class="swiper-lazy-preloader"></div>
                                <div class="px-4 pb-4">
                                    <div class="max-md:top-90 top-70 right-[20%] absolute flex justify-center items-center bg-white my-auto px-4 py-0.5 border-3 border-light-red font-bold">
                                        <img src="assets/images/pinpoint.svg" alt="Locatie" class="mr-2">${slide.location}
                                    </div>
                                    <div class="flex items-center my-auto text-sm">
                                        <img src="assets/images/time indication.svg" alt="Leestijd">
                                        <p> &nbsp ${slide.duration}</p>
                                    </div>
                                    <h2 id="${slide.title}" class="mb-2 font-bold text-lg">${slide.title}</h2>
                                    <p class="mb-4 font-semibold">${slide.text}</p>
                                    <a href="${slide.link}" class="font-bold underline">Lees meer &#8594;</a>
                                </div>
                            </div>
                        </div>`;
        });
        sliderHTML += `
                    </div>
                </div>
            </div>`;

        container.innerHTML = sliderHTML;
    }
}
