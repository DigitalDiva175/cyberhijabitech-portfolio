const slider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showTestimonial(index) {
    const offset = index * (testimonials[0].offsetWidth + 20);
    slider.style.transform = translateX(-${offset}px);
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

setInterval(nextTestimonial, 4000);