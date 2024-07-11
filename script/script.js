import { initMenuToggle } from "./menu.js";
import { initTransitionLinks } from "./transition.js";
import { initImageGallery } from "./imageGallery.js";
import { initFormSubmission } from "./form.js";

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  initMenuToggle();
  initTransitionLinks();
  initImageGallery();
  initFormSubmission();
});
