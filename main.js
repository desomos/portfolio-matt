const popup = document.querySelector('.popup-image');
const popupImg = popup.querySelector('img');
const popupVideo = popup.querySelector('video');

// Click sur une image ou une vidéo
document.querySelectorAll('.image img').forEach(img => {
    img.addEventListener('click', () => {
        popup.style.display = 'block';

        // IMAGE
        if (img.dataset.full) {
            popupVideo.pause();
            popupVideo.style.display = 'none';
            popupVideo.src = '';

            popupImg.style.display = 'block';
            popupImg.src = img.dataset.full;
        }

        // VIDEO
        if (img.dataset.video) {
            popupImg.style.display = 'none';
            popupImg.src = '';

            popupVideo.style.display = 'block';
            popupVideo.src = img.dataset.video;
            popupVideo.play();
        }
    });
});

// Fermer la popup
popup.addEventListener('click', () => {
    popup.style.display = 'none';

    popupImg.src = '';
    popupVideo.pause();
    popupVideo.src = '';
});
