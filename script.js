// script.js

// Contact Form Validation & Submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill out all fields.");
                return;
            }

            // Simple email validation
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Use Formspree for email sending
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert("Thank you! Your message has been sent.");
                    contactForm.reset();
                } else {
                    alert("Oops! There was a problem sending your message.");
                }
            })
            .catch(error => {
                alert("Oops! There was a problem sending your message.");
                console.error("Error:", error);
            });
        });
    }
});
