document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('menu-open');
            mainMenu.style.display = mainMenu.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Transition Links
    document.querySelectorAll('.transition-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            document.body.classList.add('fade-out');
            
            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top a');

    if (backToTopButton) {
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// scripts.js
const photoGallery = document.getElementById('photo-gallery');

const photos = [
    { src: './assets/images/1.jpg', caption: 'Caption for image 1' },
    { src: './assets/images/2.jpg', caption: 'Caption for image 2' },
    { src: './assets/images/3.jpg', caption: 'Caption for image 3' },
    { src: './assets/images/4.jpg', caption: 'Caption for image 1' },
    { src: './assets/images/5.jpg', caption: 'Caption for image 2' },
    { src: './assets/images/6.jpg', caption: 'Caption for image 3' },
    { src: './assets/images/7.jpg', caption: 'Caption for image 1' },
    { src: './assets/images/8.jpg', caption: 'Caption for image 2' },
    { src: './assets/images/9.jpg', caption: 'Caption for image 3' },
    { src: './assets/images/10.jpg', caption: 'Caption for image 1' },
    { src: './assets/images/11.jpg', caption: 'Caption for image 2' },
    { src: './assets/images/12.jpg', caption: 'Caption for image 3' },
    { src: './assets/images/13.jpg', caption: 'Caption for image 1' },
    { src: './assets/images/14.jpg', caption: 'Caption for image 2' },
    { src: './assets/images/15.jpg', caption: 'Caption for image 3' },
    { src: './assets/images/16.jpg', caption: 'Caption for image 1' },
    { src: './assets/images/17.jpg', caption: 'Caption for image 2' },
    { src: './assets/images/18.jpg', caption: 'Caption for image 3' },
   
    // Add more photos here
];

photos.forEach(photo => {
    const photoDiv = document.createElement('div');
    photoDiv.className = 'photo';
    
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.caption;
    
    const captionDiv = document.createElement('div');
    captionDiv.className = 'caption';
    captionDiv.textContent = photo.caption;
    
    photoDiv.appendChild(img);
    photoDiv.appendChild(captionDiv);
    photoGallery.appendChild(photoDiv);
});
