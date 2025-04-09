import { initMenuToggle } from './menu.mjs';
import { initTransitionLinks } from './transition.mjs';
import { initImageGallery } from './imageGallery.mjs';
import { initDraggableGallery } from './gallery.mjs';
import { initPhotoGallery } from './photos.mjs';
import { initGoogleTranslate } from './translate.mjs';

document.addEventListener('DOMContentLoaded', function () {
  initMenuToggle();
  initTransitionLinks();
  initImageGallery();
  initDraggableGallery();
  initPhotoGallery();
  initGoogleTranslate();
});
