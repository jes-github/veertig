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
                640: { slidesPerView: 1.5, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 30 },
            },
        });
    } catch (error) {
        console.error("Error loading groei-door-latent-talent slider:", error);
    }

    function generateGroeiDoorLatentTalentSlider(slides) {
        let sliderHTML = `
            <div class="lg:w-5/12">
                <h2 class="font-bold text-xl lg:text-4xl leading-xl lg:leading-4xl">Groei door latent talent</h2>
                <div class="flex items-start py-8 pr-16">
                    <img src="assets/images/swoosh.svg" alt="Swoosh" class="mt-4 mr-4 w-16 h-auto" />
                    <p class="font-semibold lg:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec.
                    </p>
                </div>
                <div class="hidden lg:flex items-center space-x-16 ml-22">
                    <div class="flex items-center space-x-4 mt-6">
                        <button class="cursor-pointer groei-door-latent-talent-swiper-prev">
                            <img src="assets/images/Arrow - left.svg" alt="Vorige">
                        </button>
                        <button class="cursor-pointer groei-door-latent-talent-swiper-next">
                            <img src="assets/images/Arrow - right.svg" alt="Volgende">
                        </button>
                    </div>
                    <div class="hidden lg:block mt-8 groei-door-latent-talent-pagination"></div>
                </div>
            </div>
            <div class="w-full lg:w-7/12 overflow-visible">
                <div class="overflow-visible swiper groei-door-latent-talent-swiper">
                    <div class="swiper-wrapper">`;

        slides.forEach(slide => {
            sliderHTML += `
                        <div class="swiper-slide">
                            <div class="card">
                                <div class="lg:block flex justify-center">
                                    <img src="${slide.image}" alt="${slide.title}" 
                                         class="rounded-full w-60 lg:w-120 h-60 lg:h-105" />
                                </div>
                                <div class="px-4 pb-4">
                                    <div class="top-95 right-24 lg:right-0 absolute flex justify-center items-center bg-white my-auto px-4 py-0.5 border-3 border-light-red font-bold">
                                        <img src="assets/images/pinpoint.svg" alt="Locatie" class="mr-2">${slide.location}
                                    </div>
                                    <div class="flex items-center my-auto text-sm">
                                        <img src="assets/images/time indication.svg" alt="Leestijd">
                                        <p>${slide.duration}</p>
                                    </div>
                                    <h2 class="mb-2 font-bold text-lg">${slide.title}</h2>
                                    <p class="mb-4 font-semibold">${slide.description}</p>
                                    <a href="${slide.link}" class="font-bold underline">Lees Meer &#8594;</a>
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
