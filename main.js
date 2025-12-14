const popup = document.querySelector('.popup-image');
const popupImg = popup.querySelector('img');
const images = Array.from(document.querySelectorAll('.image img'));

let currentIndex = 0;

/* --- OUVERTURE POPUP --- */
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showImage();
        popup.style.display = 'block';
    });
});

function showImage() {
    popupImg.src = images[currentIndex].dataset.full;
}

/* --- FERMETURE POPUP --- */
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
        popupImg.src = '';
    }
});

/* --- NAVIGATION --- */
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

/* --- CLAVIER (desktop) --- */
document.addEventListener('keydown', (e) => {
    if (popup.style.display !== 'block') return;

    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') popup.click();
});

/* --- SWIPE (mobile) --- */
let touchStartX = 0;
let touchEndX = 0;

popupImg.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

popupImg.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) < 50) return; // seuil minimum

    if (swipeDistance < 0) {
        nextImage(); // swipe gauche → droite
    } else {
        prevImage(); // swipe droite → gauche
    }
}




