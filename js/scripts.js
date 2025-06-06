document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const navUl = document.querySelector(".main-nav ul");

  toggle.addEventListener("click", () => {
    navUl.classList.toggle("open");
  });
});

// Ajoutez au même fichier js/scripts.js :
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Merci, votre message a bien été envoyé !");
    form.reset();
  });
});

// FAQ toggle
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      // Fermer tous avant d’ouvrir celui-ci (optionnel)
      items.forEach((i) => {
        if (i !== item) i.classList.remove("open");
      });
      // Basculer ouverture/fermeture
      item.classList.toggle("open");
    });
  });
});
