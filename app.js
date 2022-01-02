const navbarBtn = document.querySelector('.nav-menu-button');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

const toggleNavigation = () => {
  navMenu.classList.toggle('show');
  if (navMenu.classList.contains('show')) {
    navbarBtn.innerHTML = '<i class="fas fa-times fa-2x"></i>';
  } else {
    navbarBtn.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
  }
};

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', toggleNavigation);
});

navbarBtn.addEventListener('click', toggleNavigation);
