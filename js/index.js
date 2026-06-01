// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Typed.js animation in hero
var typed = new Typed(".typed-roles", {
  strings: [
    "Senior Site Reliability Engineer",
    "Cloud Infrastructure Architect",
    "Open Source Contributor",
    "Conference Speaker",
    "Kubernetes Expert",
    "Red Hat Engineer"
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 2000,
  loop: true
});

// Scroll-up button + header shrink
const scrollUpBtn = document.getElementById("ToTop");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 20;
  scrollUpBtn.classList.toggle("show", scrolled);
  header.classList.toggle("header--scrolled", window.scrollY > 50);
});

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Scroll-reveal animations
const revealElements = document.querySelectorAll(
  '.service, .speaking__card, .opensource__card, .portfolio_wrap, .stat'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const navLink = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
    if (navLink && entry.isIntersecting) {
      document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('nav__link--active'));
      navLink.classList.add('nav__link--active');
    }
  });
}, {
  threshold: 0.3,
  rootMargin: '-80px 0px 0px 0px'
});

sections.forEach(section => navObserver.observe(section));
