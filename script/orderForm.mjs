// Initialize EmailJS with your Public Key
(function () {
  emailjs.init('TgHWfRP3j9cb7-Mhc');
  console.log('EmailJS initialized');
})();

export function initOrderFormSubmission() {
  const orderForm = document.getElementById('orderForm');
  console.log('Order form found:', orderForm);

  if (orderForm) {
    orderForm.addEventListener('submit', function (event) {
      event.preventDefault();
      console.log('Form submission intercepted');

      const serviceID = 'service_4grcyt9';
      const templateID = 'template_wpceeot';

      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          console.log('Form submission successful');
          window.location.href = './message.html';
        },
        (err) => {
          console.error('Failed to send order request:', err);
        },
      );
    });
  } else {
    console.log('Order form not found');
  }
}

initOrderFormSubmission();
