const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});


// let slideIndex = 1;
// showSlides(slideIndex);

// function changeSlide(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let slides = document.querySelectorAll(".slide");
//     let dots = document.querySelectorAll(".dot");

//     if (n > slides.length) slideIndex = 1;
//     if (n < 1) slideIndex = slides.length;

//     slides.forEach(slide => slide.style.display = "none");
//     dots.forEach(dot => dot.classList.remove("active1"));

//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].classList.add("active1");
// }


let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

// show first slide
showSlides(slideIndex);

// AUTO SLIDE
let auto = setInterval(nextSlide, 3000);

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;
    showSlides(slideIndex);
}

function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides(slideIndex);
    resetAuto();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides(slideIndex);
    resetAuto();
}

function showSlides(n) {
    slides.forEach((slide) => slide.style.display = "none");
    dots.forEach((dot) => dot.classList.remove("active1"));

    slides[n].style.display = "block";
    dots[n].classList.add("active1");
}

// reset timer when user clicks
function resetAuto() {
    clearInterval(auto);
    auto = setInterval(nextSlide, 3000);
}


const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});