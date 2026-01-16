document.addEventListener("DOMContentLoaded", () => {

  // Smooth scroll for navbar links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Register button redirect
  const registerBtn = document.getElementById("registerBtn");
  if (registerBtn) {
    registerBtn.addEventListener("click", () => {
      window.location.href = "registration.html";
    });
  }

}); 
// View Details -> show About section
const viewDetailsBtn = document.getElementById("viewDetailsBtn");
const aboutSection = document.getElementById("about");

let aboutVisible = false;

if (viewDetailsBtn && aboutSection) {
  viewDetailsBtn.addEventListener("click", () => {

    if (!aboutVisible) {
      // SHOW
      aboutSection.classList.remove("hide");
      aboutSection.classList.add("show");
      aboutSection.style.display = "block";

      viewDetailsBtn.textContent = "Hide Details";
      aboutVisible = true;

    } else {
      // HIDE
      aboutSection.classList.remove("show");
      aboutSection.classList.add("hide");

      setTimeout(() => {
        aboutSection.style.display = "none";
      }, 450);

      viewDetailsBtn.textContent = "View Details";
      aboutVisible = false;
    }
  });
}
// Eligibility section reveal (ALL cards together)
const eligibilitySection = document.querySelector('.eligibility');
const eligibilityCards = document.querySelectorAll('.eligibility-card');

const eligibilityObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        eligibilityCards.forEach(card =>
          card.classList.add('reveal')
        );
        eligibilityObserver.disconnect(); // 🔥 only once
      }
    });
  },
  {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
  }
);

if (eligibilitySection) {
  eligibilityObserver.observe(eligibilitySection);
}
// ===== NAV ACTIVE ON SCROLL (SIMPLE & RELIABLE) =====
const navLinks = document.querySelectorAll(".topbar nav a");
const sections = document.querySelectorAll(
  "section[id]:not(#about), footer[id]"
);


window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // header offset
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
/* ===== HERO STATS COUNT-UP ANIMATION ===== */

const counters = document.querySelectorAll('.counter');

const runCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const speed = 80; // smaller = faster

  const updateCount = () => {
    const current = +counter.innerText;

    const increment = Math.ceil(target / speed);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
};

/* Run once when page loads */
window.addEventListener('load', () => {
  counters.forEach(counter => runCounter(counter));
});

document.addEventListener("DOMContentLoaded", function () {
  const ieeeSelect = document.getElementById("ieeeMember");
  const ieeeIdBox = document.getElementById("ieeeIdBox");

  if (!ieeeSelect || !ieeeIdBox) return;

  ieeeSelect.addEventListener("change", function () {
    if (this.value === "yes") {
      ieeeIdBox.style.display = "block";
      ieeeIdBox.querySelector("input").required = true;
    } else {
      ieeeIdBox.style.display = "none";
      ieeeIdBox.querySelector("input").required = false;
    }
  });
});

// IEEE Member ID toggle
const ieeeSelect = document.getElementById("ieeeMember");
const ieeeIdBox = document.getElementById("ieeeIdBox");

if (ieeeSelect) {
  ieeeSelect.addEventListener("change", () => {
    if (ieeeSelect.value === "yes") {
      ieeeIdBox.style.display = "block";
    } else {
      ieeeIdBox.style.display = "none";
    }
  });
}

// FORM SUBMIT HANDLING
const form = document.querySelector("form");
const successMessage = document.getElementById("successMessage");

if (form && successMessage) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    form.style.display = "none";
    successMessage.style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== GALLERY LOGIC =====

document.addEventListener("DOMContentLoaded", () => {

  const galleryPanel = document.getElementById("galleryPanel");
  if (!galleryPanel) return;

  const closeGallery = document.getElementById("closeGallery");
  const galleryImage = document.getElementById("galleryImage");
  const nextBtn = document.getElementById("nextImg");
  const prevBtn = document.getElementById("prevImg");

  const images = [
  "assets/images/img1.jpg",
  "assets/images/img2.jpg",
  "assets/images/img3.jpg",
  "assets/images/img4.jpg",
  "assets/images/img5.jpg",
  "assets/images/img6.jpg",
  "assets/images/img7.jpg",
  "assets/images/img8.jpg",
  "assets/images/img9.jpg",
  "assets/images/img10.jpg",
  "assets/images/img11.jpg"
];


  let currentIndex = 0;

  // 🔥 GLOBAL FUNCTION FOR NAVBAR
  window.openGallery = function () {
    currentIndex = 0;
    galleryImage.src = images[currentIndex];
    galleryPanel.classList.add("active");
  };

  closeGallery.addEventListener("click", () => {
    galleryPanel.classList.remove("active");
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentIndex];
  });

});




