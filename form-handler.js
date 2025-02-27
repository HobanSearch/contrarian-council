// Form handler for the Contrarian Council waitlist using SuperEasyForms
document.addEventListener('DOMContentLoaded', function() {
    const waitlistForm = document.getElementById('waitlist-form');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', function(e) {
            // We don't prevent default since SuperEasyForms works with standard form submissions
            // However, we can add additional functionality here if needed
            
            // Optional: Add tracking 
            const email = document.getElementById('email').value;
            console.log('Form submission initiated for:', email);
            
            // SuperEasyForms will handle the redirect after submission
            // We can optionally add a loading indicator
            const submitButton = waitlistForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.innerHTML = 'Submitting...';
                submitButton.disabled = true;
            }
            
            // The actual form submission happens naturally - SuperEasyForms will handle the rest
        });
    }
    
    // Check if user was redirected back after submission
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('form_submission') === 'success') {
        // If SuperEasyForms redirected back with success parameter
        const formElement = document.getElementById('waitlist-form');
        if (formElement) {
            formElement.innerHTML = `
                <div class="success-message">
                    <h3>Welcome, Initiate</h3>
                    <p>Your application has been received. The Council will review your submission and contact you soon with further instructions on the Rituals of Contribution.</p>
                </div>
            `;
        }
    }
});
