export function initPhotoGallery() {
    const photoGallery = document.getElementById('photo-gallery');

    const photos = [
        { src: './assets/images/1.jpg', caption: 'Caption for image 1' },
        { src: './assets/images/2.jpg', caption: 'Caption for image 2' },
        { src: './assets/images/3.jpg', caption: 'Caption for image 3' },
        { src: './assets/images/4.jpg', caption: 'Caption for image 4' },
        { src: './assets/images/5.jpg', caption: 'Caption for image 5' },
        { src: './assets/images/6.jpg', caption: 'Caption for image 6' },
        { src: './assets/images/7.jpg', caption: 'Caption for image 7' },
        { src: './assets/images/8.jpg', caption: 'Caption for image 8' },
        { src: './assets/images/9.jpg', caption: 'Caption for image 9' },
        { src: './assets/images/10.jpg', caption: 'Caption for image 10' },
        { src: './assets/images/11.jpg', caption: 'Caption for image 11' },
        { src: './assets/images/12.jpg', caption: 'Caption for image 12' },
        { src: './assets/images/13.jpg', caption: 'Caption for image 13' },
        { src: './assets/images/14.jpg', caption: 'Caption for image 14' },
        { src: './assets/images/15.jpg', caption: 'Caption for image 15' },
        { src: './assets/images/16.jpg', caption: 'Caption for image 16' },
        { src: './assets/images/17.jpg', caption: 'Caption for image 17' },
        { src: './assets/images/18.jpg', caption: 'Caption for image 18' },
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
}

