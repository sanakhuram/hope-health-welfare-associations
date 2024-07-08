export function initImageGallery() {
    const imageGallery = document.getElementById('image-gallery');

    if (imageGallery) {
        const images = [
            {
                src: './assets/images/image1.jpg',
                title: 'Soft Serenity Black Cushion',
                details: 'Fabric Type: Raw Silk<br>Embroidery: Sitara Tilla Work<br>Price: 1500 PKR (Price per piece)',
                code: 'Product Code: SSC001'
            },
            {
                src: './assets/images/image2.jpg',
                title: 'Tranquil Touch Cushion',
                details: 'Fabric Type: Raw Silk<br>Embroidery: Sitara Tilla Work<br>Price: 1500 PKR (Price per piece)',
                code: 'Product Code: TTC001'
            },
            {
                src: './assets/images/image3.jpg',
                title: 'Gentle Grace Cushion',
                details: 'Fabric Type: Raw Silk<br>Embroidery: Sitara Tilla Work<br>Price: 1500 PKR (Price per piece)',
                code: 'Product Code: GGC001'
            },
            {
                src: './assets/images/image4.jpg',
                title: 'Heavenly Hug Beige Cushion',
                details: 'Fabric Type: Raw Silk<br>Embroidery: Sitara Tilla Work<br>Price: 1500 PKR (Price per piece)',
                code: 'Product Code: HHC001'
            },
            {
                src: './assets/images/image5.jpg',
                title: 'Comfort Cloud Cushion',
                details: 'Fabric Type: Raw Silk<br>Embroidery: Sitara Tilla Work<br>Price: 1500 PKR (Price per piece)',
                code: 'Product Code: CCC001'
            },
            {
                src: './assets/images/image6.jpg',
                title: 'Sweet Slumber Cushion',
                details: 'Fabric Type: Raw Silk<br>Embroidery: Sitara Tilla Work<br>Price: 1500 PKR (Price per piece)',
                code: 'Product Code: SSC001'
            },
            {
                src: './assets/images/image7.jpg',
                title: 'Dreamy Delight Cushion',
                details: 'Fabric Type: Velvet<br>Embroidery: Handcrafted<br>Price: 2000 PKR (Price per piece)',
                code: 'Product Code: DDC001'
            },
            {
                src: './assets/images/image8.jpg',
                title: 'Elegant Evening Cushion',
                details: 'Fabric Type: Satin<br>Embroidery: Machine Embroidery<br>Price: 1800 PKR (Price per piece)',
                code: 'Product Code: EEC001'
            },
            {
                src: './assets/images/image9.jpg',
                title: 'Rustic Charm Cushion',
                details: 'Fabric Type: Raw Silk<br>Embroidery: Patch Work<br>Price: 1400 PKR (Price per piece)',
                code: 'Product Code: RCC001'
            },
            {
                src: './assets/images/image10.jpg',
                title: 'Autumn Aura Cushion',
                details: 'Fabric Type: Raw Silk<br>Embroidery: Floral Design<br>Price: 1600 PKR (Price per piece)',
                code: 'Product Code: AAC001'
            },
            {
                src: './assets/images/image11.jpg',
                title: 'Vintage Vibe Cushion',
                details: 'Fabric Type: Raw Silk<br>Embroidery: Classic Embroidery<br>Price: 1700 PKR (Price per piece)',
                code: 'Product Code: VVC001'
            },
            {
                src: './assets/images/image12.jpg',
                title: 'Modern Majesty Cushion',
                details: 'Fabric Type: Raw Silk<br>Embroidery: Abstract Design<br>Price: 1300 PKR (Price per piece)',
                code: 'Product Code: MMC001'
            },
            {
                src: './assets/images/image13.jpg',
                title: 'Bohemian Bliss Cushion',
                details: 'Fabric Type: Raw Silk<br>Embroidery: Boho Style<br>Price: 1200 PKR (Price per piece)',
                code: 'Product Code: BBC001'
            },
            {
                src: './assets/images/image14.jpg',
                title: 'Classic Comfort Cushion',
                details: 'Fabric Type: Raw Silk<br>Embroidery: Knitted Pattern<br>Price: 1900 PKR (Price per piece)',
                code: 'Product Code: CCC002'
            },
           
            // Add more image objects as needed
        ];

        images.forEach(image => {
            const imageItem = document.createElement('div');
            imageItem.className = 'image-item';

            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.title;

            const title = document.createElement('h3');
            title.textContent = image.title;

            const details = document.createElement('p');
            details.innerHTML = image.details;

            const code = document.createElement('p');
            code.textContent = image.code;

            imageItem.appendChild(img);
            imageItem.appendChild(title);
            imageItem.appendChild(details);
            imageItem.appendChild(code);

            imageGallery.appendChild(imageItem);
        });
    }
}
