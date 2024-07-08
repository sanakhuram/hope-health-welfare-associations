import { initMenuToggle } from './menu.js';
import { initTransitionLinks } from './transition.js';
import { initBackToTop } from './backToTop.js';
import { initImageGallery } from './imageGallery.js';

import { initDraggableGallery } from './gallery.js';
import { initPhotoGallery } from './photos.js';

document.addEventListener('DOMContentLoaded', function() {
    initMenuToggle();
    initTransitionLinks();
    initBackToTop();
    initImageGallery();
    initDraggableGallery();
    initPhotoGallery();
});
