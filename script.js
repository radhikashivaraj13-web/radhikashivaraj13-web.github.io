// Contact form validation

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();
        const result = document.querySelector("#form-result");

        if (!name || !email || !subject || !message) {
            result.textContent = "Please complete every field.";
            result.style.color = "#f87171";
            return;
        }

        result.textContent =
            "Thanks, " + name + "! Your message passed validation.";

        result.style.color = "#4ade80";

        contactForm.reset();
    });
}
