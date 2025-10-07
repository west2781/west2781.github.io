// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {

    // Select the contact form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent default form submission

            // Get form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Basic validation
            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields before submitting.");
                return;
            }

            // Optional: simple email pattern check
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Use EmailJS to send the form (requires account setup)
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                from_name: name,
                from_email: email,
                message: message,
            })
            .then(() => {
                alert("Thank you for your message! I will get back to you soon.");
                contactForm.reset(); // Clear form after submission
            }, (error) => {
                console.error("EmailJS error:", error);
                alert("Oops! Something went wrong. Please try again later.");
            });
        });
    }
});

