export function initPhotoGallery() {
  const photoGallery = document.getElementById('photo-gallery');

  if (!photoGallery) {
    console.log('Photo gallery element not found');
    return; 
  }

  const photos = [
    {
      src: './assets/images/1.jpg',
      caption: '2018 Annual convocation and students marriage',
    },
    { src: './assets/images/2.jpg', caption: 'Student Marriage 2018' },
    { src: './assets/images/3.jpg', caption: 'Opening ceremony of Stitch box' },
    { src: './assets/images/4.jpg', caption: 'Yearly Marriage Ceremony' },
    { src: './assets/images/5.jpg', caption: 'Caption for image 5' },
    { src: './assets/images/6.jpg', caption: 'Yearly Marriage Ceremony' },
    {
      src: './assets/images/7.jpg',
      caption: 'Mrs. Saima Ahad DCO Okara visit our Institute',
    },
    {
      src: './assets/images/8.jpg',
      caption: 'Yearly Marriage Ceremony of students',
    },
    { src: './assets/images/9.jpg', caption: 'Jashan e Eid milad un Nabi' },
    { src: './assets/images/10.jpg', caption: 'First Annual convocation 2016' },
    { src: './assets/images/11.jpg', caption: 'Prize Distribution 2016' },
    { src: './assets/images/12.jpg', caption: 'Mrs. Zara muneeb visit' },
    {
      src: './assets/images/13.jpg',
      caption: 'Concordia college professor delivered self grooming lecture',
    },
    {
      src: './assets/images/14.jpg',
      caption: '2023 Pakistan independce Day Celebrations',
    },
    { src: './assets/images/15.jpg', caption: 'Prize Distribution' },
    {
      src: './assets/images/16.jpg',
      caption: 'Celebration of Independence day',
    },
    {
      src: './assets/images/17.jpg',
      caption: 'Ranal vocational institute student visit',
    },
    { src: './assets/images/18.jpg', caption: 'Caption for image 18' },
    {
      src: './assets/images/19.jpg',
      caption: 'Visiting Faculty Lecture on Self Grooming',
    },
    {
      src: './assets/images/20.jpg',
      caption: 'Visiting Faculty Lecture on Health Topics',
    },
    {
      src: './assets/images/21.jpg',
      caption: 'Award Distribution 2025',
    },
    {
      src: './assets/images/22.jpg',
      caption: 'yearly Marriage ceremony 2025',
    },
  ];

  photos.reverse();

  photos.forEach((photo) => {
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
