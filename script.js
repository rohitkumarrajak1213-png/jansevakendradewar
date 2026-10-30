const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function() {
    const phone = "6268161760";
    const message = encodeURIComponent(
        "नमस्ते, मुझे जन सेवा केंद्र देवार की सेवाओं के बारे में जानकारी चाहिए।"
    );

    const whatsappURL =
        "https://wa.me/" + phone + "?text=" + message;

    window.open(whatsappURL, "_blank");
});
