import { initMenuToggle } from './menu.mjs';
import { initTransitionLinks } from './transition.mjs';
import { initImageGallery } from './imageGallery.mjs';
import { initGoogleTranslate } from './translate.mjs';

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
  initMenuToggle();
  initTransitionLinks();
  initImageGallery();
  initGoogleTranslate();
});
