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

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // plus petit = plus rapide

  const animateCounter = (counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  };

  const handleScroll = () => {
    counters.forEach((counter) => {
      const parent = counter.closest(".stat-item");
      const top = parent.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100 && !counter.classList.contains("started")) {
        counter.classList.add("started");
        animateCounter(counter);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  // Au cas où la section est déjà dans le viewport au chargement
  handleScroll();
});

// Scroll to Top Button
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");

  // Afficher le bouton quand l'utilisateur descend de 300px
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // Remonter en haut quand on clique
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Initialisation Vanilla Tilt sur toutes les cartes avec l’attribut data-tilt
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 15, // inclinaison maximale en degrés
  speed: 400, // vitesse de transition
  glare: true, // activer l’effet de reflet
  "max-glare": 0.2, // intensité maximale du reflet (0 à 1)
  scale: 1.03, // facteur d’agrandissement au survol
});
