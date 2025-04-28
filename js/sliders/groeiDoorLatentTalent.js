export async function initGroeiDoorLatentTalentSlider() {
    const container = document.getElementById("verhaal-groei-door-latent-talent");
    if (!container) return;

    try {
        const response = await fetch("src/groei-door-latent-talent.json");
        const data = await response.json();
        generateGroeiDoorLatentTalentSlider(data.slides);

        new Swiper(".groei-door-latent-talent-swiper", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".groei-door-latent-talent-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".groei-door-latent-talent-swiper-next",
                prevEl: ".groei-door-latent-talent-swiper-prev",
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
        console.error("Error loading groei-door-latent-talent slider:", error);
    }

    function generateGroeiDoorLatentTalentSlider(slides) {
        let sliderHTML = `
            <div class="xl:w-5/12">
                <h2 id="Groei door latent talent" class="font-bold text-xl xl:text-4xl leading-xl xl:leading-4xl">Groei door latent talent</h2>
                <div class="flex items-start py-8 pr-16">
                    <img src="assets/images/swoosh.svg" alt="Swoosh" class="mt-4 mr-4 w-16 h-auto" />
                    <p class="font-semibold xl:text-lg">
                        Onze stadjongeren zitten tjokvol ideeën, drive en talent. Die willen we ook tot uiting laten komen. Daarom vinden we het bij JES belangrijk om jongeren zoveel mogelijk te prikkelen. Benieuwd welk talent er via cursussen, studioworkshops, experiment, …  komt bovendrijven?
                    </p>
                </div>
                <div class="hidden xl:flex items-center space-x-16 ml-22">
                    <div class="flex items-center space-x-4 mt-6">
                        <button class="cursor-pointer groei-door-latent-talent-swiper-prev">
                            <img src="assets/images/Arrow - left.svg" alt="Vorige">
                        </button>
                        <button class="cursor-pointer groei-door-latent-talent-swiper-next">
                            <img src="assets/images/Arrow - right.svg" alt="Volgende">
                        </button>
                    </div>
                    <div class="hidden xl:block mt-8 groei-door-latent-talent-pagination"></div>
                </div>
            <div class="relative xl:hidden">
                <div class="absolute top-55 left-0 w-full h-full flex justify-between items-center z-10">
                    <button class="cursor-pointer groei-door-latent-talent-swiper-prev">
                        <img src="assets/images/Arrow - left.svg" alt="Vorige">
                    </button>
                    <button class="cursor-pointer groei-door-latent-talent-swiper-next">
                        <img src="assets/images/Arrow - right.svg" alt="Volgende">
                    </button>
                </div>
                <div class="hidden xl:block mt-8 groei-door-latent-talent-pagination"></div>
            </div>

            </div>
            <div class="w-full xl:w-7/12 overflow-visible">
                <div class="overflow-visible swiper groei-door-latent-talent-swiper">
                    <div class="swiper-wrapper">`;

        slides.forEach(slide => {
            sliderHTML += `
                        <div class="swiper-slide">
                            <div class="card">
                                <div class="xl:block flex justify-center">
                                    <div class="aspect-h-1 aspect-w-1">
                                        <img src="${slide.image}" alt="${slide.title}" 
                                         class="rounded-full max-md:w-100 max-md:h-100 w-80 h-80 swiper-lazy" />
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
