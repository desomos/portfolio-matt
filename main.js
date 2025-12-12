

document.querySelectorAll(".list .image img").forEach(image => {
    image.onclick = () => {
        const popup = document.querySelector(".popup-image");
        const popupImg = popup.querySelector("img");
        
        popup.style.display = "block";
        popupImg.src = image.getAttribute("src");

        // Close popup when clicking outside the image
        popup.onclick = (e) => {
            if (e.target !== popupImg) {
                popup.style.display = "none";
            }
        };
    };
});

