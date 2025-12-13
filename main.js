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

const menuToggle = document.getElementById('menu-toggle');
const menuOverlay = document.getElementById('menu-overlay');

// Ouvrir ou fermer le menu avec le même bouton
menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    menuOverlay.classList.toggle('active'); // toggle au lieu de add
});

// Fermer le menu si on clique en dehors (overlay)
menuOverlay.addEventListener('click', (e) => {
    if(e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
    }
});




