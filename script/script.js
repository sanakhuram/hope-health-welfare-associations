document.addEventListener('DOMContentLoaded', function () {
    // Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('menu-open');
            mainMenu.style.display = mainMenu.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Transition Links
    document.querySelectorAll('.transition-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            document.body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = href;
            }, 5);
        });
    });


    document.addEventListener('DOMContentLoaded', function() {
        const backToTopButton = document.querySelector('.back-to-top a');
        const backToTopDiv = document.querySelector('.back-to-top');
    
        // Scroll event to show/hide the "Back to Top" button
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopDiv.style.display = 'block';
            } else {
                backToTopDiv.style.display = 'none';
            }
        });
    
        // Click event to scroll back to top
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    
});
