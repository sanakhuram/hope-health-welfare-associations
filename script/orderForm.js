// Initialize EmailJS with your Public Key
(function(){
    emailjs.init("TgHWfRP3j9cb7-Mhc"); // Replace with your correct Public Key
})();

// Function to initialize the form submission
export function initOrderFormSubmission() {
    const orderForm = document.getElementById('orderForm'); // Ensure this matches the form ID
    const orderMessage = document.getElementById('orderMessage'); // The message div

    if (orderForm) {
        orderForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission behavior
  
            const serviceID = 'service_b3u5zha'; // Your actual Service ID
            const templateID = 'template_bgiq7hz'; // Your actual Template ID

            // Send the form data via EmailJS
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    // Display the success message
                    orderMessage.style.display = 'block';
                    orderMessage.textContent = 'Order sent! You will be contacted via email or phone call.';
                    
                    orderForm.reset(); // Clear the form after submission
                }, (err) => {
                    // Handle any errors
                    orderMessage.style.display = 'block';
                    orderMessage.style.color = 'red';
                    orderMessage.textContent = `Failed to send order request: ${err.text}`;
                    console.error('Failed to send order request:', err); // Log the error for debugging
                });
        });
    }
}

// Call the function to initialize the form submission
initOrderFormSubmission();

  