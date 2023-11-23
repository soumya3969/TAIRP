

let currentIndex = 0;

function changeSlide(n) {
    currentIndex += n;
    showSlide();
}

function showSlide() {
    const slider = document.querySelector('.list');
    const slides = document.querySelectorAll('.list img');
    
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    const translationValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translationValue + ')';
}

// !Automatic slide change
setInterval(() => {
    changeSlide(1);
}, 5000);
