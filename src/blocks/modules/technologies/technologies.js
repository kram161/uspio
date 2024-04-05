import Swiper from "swiper/bundle";

import "../../../../node_modules/swiper/swiper.scss";

document.addEventListener("DOMContentLoaded", () => {
    
    const swiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 8,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            370: {
                slidesPerView: 2,
                spaceBetween: 16,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
                
            }
        }
    });

    swiper;
});