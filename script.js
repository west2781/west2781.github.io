// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {

    // Contact form submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // prevent default form submission

            // Validate inputs
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields before submitting.");
                return;
            }

            // Optional: basic email format check
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Submit form to Formspree
            fetch(contactForm.action, {
                method: "POST",
                headers: {
                    'Accept': 'application/json'
                },
                body: new FormData(contactForm)
            }).then(response => {
                if (response.ok) {
                    alert("Thank you for your message! I will get back to you soon.");
                    contactForm.reset();
                } else {
                    alert("Oops! Something went wrong. Please try again.");
                }
            }).catch(error => {
                alert("Oops! Something went wrong. Please try again.");
            });
        });
    }
});
