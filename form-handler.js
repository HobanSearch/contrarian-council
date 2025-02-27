// Form handler for the Contrarian Council waitlist using FormBold
document.addEventListener('DOMContentLoaded', function() {
    const waitlistForm = document.getElementById('waitlist-form');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function() {
            // FormBold handles the form submission automatically
            // We just need to update the UI for better user experience
            
            // Get the submit button and update its appearance
            const submitButton = waitlistForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.innerHTML = 'Submitting...';
                submitButton.disabled = true;
            }
            
            // Track the submission for analytics (optional)
            const email = document.getElementById('email').value;
            console.log('Form submission initiated for:', email);
            
            // No need to prevent default - FormBold will handle the submission
            // and redirect based on the _redirect hidden field
        });
    }
    
    // Check for successful submission redirect
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submission') === 'success') {
        // Find the form element and replace it with success message
        const formElement = document.getElementById('waitlist-form');
        if (formElement) {
            formElement.innerHTML = `
                <div class="success-message">
                    <h3>Welcome, Initiate</h3>
                    <p>Your application has been received. The Council will review your submission and contact you soon with further instructions on the Rituals of Contribution.</p>
                </div>
            `;
            
            // Scroll to the form to ensure user sees the success message
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
