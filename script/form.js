let isFormSubmissionInitialized = false;

export function initFormSubmission() {
    if (isFormSubmissionInitialized) return;

    const contactForm = document.getElementById('contactForm');

    if (!contactForm) {
        console.error('Contact form not found');
        return;
    }

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);

        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    isFormSubmissionInitialized = true;
}

// Ensure this script is included and executed on all pages
document.addEventListener('DOMContentLoaded', function() {
    initFormSubmission();
});
