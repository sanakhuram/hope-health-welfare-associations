export function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top a');
    const backToTopDiv = document.querySelector('.back-to-top');

    if (backToTopButton && backToTopDiv) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopDiv.style.display = 'block';
            } else {
                backToTopDiv.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
