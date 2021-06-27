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
  strings: ["Developer", "Learner", "DevOps Engineer", "Researcher", "Hiker"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

// slide up script 

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = 1;
  } else {
    mybutton.style.opacity = 0;
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}