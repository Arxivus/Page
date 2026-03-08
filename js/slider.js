let currentSlideIndex = 1;
let slides = []

document.addEventListener('DOMContentLoaded', () => {
    slides = document.querySelectorAll(".review-section__slide")
    showSlides(currentSlideIndex, slides);
})


function nextSlide() {
    showSlides(currentSlideIndex += 1, slides);
}

function previousSlide() {
    showSlides(currentSlideIndex -= 1, slides);  
}

function showSlides(index, slides) {

    if (window.innerWidth < 768) { return } 

    else {
        if (index > slides.length) { currentSlideIndex = 1 }
        if (index < 1) { currentSlideIndex = slides.length }

        for (let slide of slides) {
            slide.style.display = "none";
        }

        slides[currentSlideIndex - 1].style.display = "flex"
        slides[index - 1].style.animation = 'fade .6s ease';   
    } 
}