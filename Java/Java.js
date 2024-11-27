document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentSlide = 0;

    // Функція для оновлення видимого слайда
    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    // Перехід до попереднього слайда
    prevButton.addEventListener("click", () => {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        updateSlide(currentSlide);
    });

    // Перехід до наступного слайда
    nextButton.addEventListener("click", () => {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        updateSlide(currentSlide);
    });

    // Початкове налаштування
    updateSlide(currentSlide);
});
