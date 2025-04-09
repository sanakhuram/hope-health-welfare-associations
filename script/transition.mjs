export function initTransitionLinks() {
  document.querySelectorAll('.transition-link').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      document.body.classList.add('page-slide-out');
      setTimeout(() => {
        window.location.href = href;
      }, 500); // Match this duration to the CSS animation duration
    });
  });
}
