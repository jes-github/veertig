export async function initWelzijnDoorSpeelterreinSlider() {
    const container = document.getElementById("verhaal-welzijn-door-speelterrein");
    if (!container) return;

    try {
        const response = await fetch("src/welzijn-door-speelterrein.json");
        const data = await response.json();
        generateWelzijnDoorSpeelterreinSlider(data.slides);

        new Swiper(".welzijn-door-speelterrein-swiper", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".welzijn-door-speelterrein-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".welzijn-door-speelterrein-swiper-next",
                prevEl: ".welzijn-door-speelterrein-swiper-prev",
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
        console.error("Error loading welzijn-door-speelterrein slider:", error);
    }

    function generateWelzijnDoorSpeelterreinSlider(slides) {
        let sliderHTML = `
            <div class="xl:w-5/12">
                <h2 id="Welzijn door speelterrein" class="font-bold text-xl xl:text-4xl leading-xl xl:leading-4xl">Welzijn door speelterrein</h2>
                <div class="flex items-start py-8 pr-16">
                    <img src="assets/images/swoosh.svg" alt="Swoosh" class="mt-4 mr-4 w-16 h-auto" />
                    <p class="font-semibold text-base xl:text-lg">
                        Jongeren hebben nood aan speelterrein. Deze verhalen tonen aan hoe onze stadsjongeren via speelruimte ontdekken, mekaar ontmoeten, leren, experimenteren en vooral gewoon spelen. Want gewoon jong zijn, daar gaat het als jongere toch om?
                    </p>
                </div>
                <div class="hidden xl:flex items-center space-x-16 ml-22">
                    <div class="flex items-center space-x-4 mt-6">
                        <button class="cursor-pointer welzijn-door-speelterrein-swiper-prev">
                            <img src="assets/images/Arrow - left.svg" alt="Vorige">
                        </button>
                        <button class="cursor-pointer welzijn-door-speelterrein-swiper-next">
                            <img src="assets/images/Arrow - right.svg" alt="Volgende">
                        </button>
                    </div>
                    <div class="hidden xl:block mt-8 welzijn-door-speelterrein-pagination"></div>
                </div>
                <div class="relative xl:hidden">
                    <div class="absolute top-55 left-0 w-full h-full flex justify-between items-center z-10">
                        <button class="cursor-pointer welzijn-door-speelterrein-swiper-prev">
                            <img src="assets/images/Arrow - left.svg" alt="Vorige">
                        </button>
                        <button class="cursor-pointer welzijn-door-speelterrein-swiper-next">
                            <img src="assets/images/Arrow - right.svg" alt="Volgende">
                        </button>
                    </div>
                    <div class="hidden xl:block mt-8 welzijn-door-speelterrein-pagination"></div>
                </div>
            </div>
            <div class="w-full xl:w-7/12 overflow-visible">
                <div class="overflow-visible swiper welzijn-door-speelterrein-swiper">
                    <div class="swiper-wrapper">`;

        slides.forEach(slide => {
            sliderHTML += `
                        <div class="swiper-slide">
                            <div class="card">
                                <div class="xl:block flex justify-center">
                                    <div class="aspect-h-1 aspect-w-1">
                                        <div class="swiper-lazy-preloader"></div>
                                        <img src="${slide.image}" alt="${slide.title}"
                                            class="swiper-lazy rounded-full w-80 h-80 max-w-full max-h-full object-cover"/>
                                    </div>
                                </div>
                                <div class="px-4 pb-4">
                                    <div class="top-70 right-[20%] absolute flex justify-center items-center bg-white my-auto px-4 py-0.5 border-3 border-light-red font-bold">
                                        <img src="assets/images/pinpoint.svg" alt="Locatie" class="mr-2">${slide.location}
                                    </div>
                                    <div class="flex items-center my-auto text-sm">
                                        <img src="assets/images/time indication.svg" alt="Leestijd">
                                        <p> &nbsp ${slide.duration}</p>
                                    </div>
                                    <h2 id="${slide.title}" class="font-bold text-lg">${slide.title}</h2>
                                    <p class="mb-4 mt-2 font-semibold">${slide.text}</p>
                                    ${slide.link ? `<a href="${slide.link}" target="_blank" class="font-bold underline">Lees meer &#8594;</a>` : ''}
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
