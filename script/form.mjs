(function () {
  emailjs.init('TgHWfRP3j9cb7-Mhc');
})();

export function initFormSubmission() {
  document
    .getElementById('contactForm')
    .addEventListener('submit', function (event) {
      event.preventDefault();

      const serviceID = 'service_b3u5zha';
      const templateID = 'template_bgiq7hz';

      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          alert('Message sent successfully!');
        },
        (err) => {
          alert(`Failed to send message: ${err.text}`);
          console.error('Failed to send message:', err);
        },
      );
    });
}
