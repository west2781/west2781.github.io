// script.js

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Prevent default form submission to allow validation and alert
            event.preventDefault();

            // Get form fields
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Simple validation
            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields before submitting.");
                return;
            }

            // Optional: email format check
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // If validation passes, submit the form
            contactForm.submit();

            // Show thank-you alert
            alert("Thank you for your message! I will get back to you soon.");
            
            // Clear form fields after submission
            contactForm.reset();
        });
    }
});
