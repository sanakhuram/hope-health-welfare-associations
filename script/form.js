(function(){
  emailjs.init("TgHWfRP3j9cb7-Mhc"); // Replace with your correct Public Key
})();

export function initFormSubmission() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const serviceID = 'service_b3u5zha'; // Your actual Service ID
    const templateID = 'template_bgiq7hz'; // Your actual Template ID

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('Message sent successfully!');
      }, (err) => {
        alert(`Failed to send message: ${err.text}`);
        console.error('Failed to send message:', err);
      });
  });
}
