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
