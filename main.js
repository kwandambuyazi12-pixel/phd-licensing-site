// The business WhatsApp number, in international format (no leading 0, no spaces)
const WHATSAPP_NUMBER = "27681762015";

// Builds a WhatsApp link with the service name already in the message
function buildWhatsAppLink(serviceName) {
    const message = "Hi PHD Licensing, I'm interested in " + serviceName +
                    ". How much does it cost, and what documents do I need?";

    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

// Make every "Ask about this" button open WhatsApp with its service
const serviceButtons = document.querySelectorAll(".service-btn");

serviceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const serviceName = button.dataset.service;
        window.open(buildWhatsAppLink(serviceName), "_blank", "noopener");
    });
});