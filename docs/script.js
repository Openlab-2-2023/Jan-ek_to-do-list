
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Ďakujeme za kontakt! Čoskoro sa vám ozveme.");
});
const galleryImages = document.querySelectorAll('.gallery-images img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = lightbox.querySelector('img');

        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
            });
        });

        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });