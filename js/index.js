const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
var mybutton = document.getElementById("ToTop");

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
  
});

// typing animation 
var typed = new Typed(".section__subtitle--about--Profiles", {
  strings: ["Senior Site Reliability Engineer", "Cloud Infrastructure Expert", "DevOps Engineer", "Open Source Contributor", "Technical Leader", "System Architect", "Red Hat Engineer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

// modern slide up script 

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add('show');
  } else {
    mybutton.classList.remove('show');
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}