const popup = document.querySelector('.popup-image');
const popupImg = popup.querySelector('img');

document.querySelectorAll('.image img').forEach(img => {
    img.addEventListener('click', () => {
        popup.style.display = 'block';
        popupImg.src = img.dataset.full;
    });
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
    popupImg.src = '';
});
