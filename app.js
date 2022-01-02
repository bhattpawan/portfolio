const navbarBtn = document.querySelector('.nav-menu-button');
const navMenu = document.querySelector('.nav-menu');

const toggleNavigation = () => {
  navMenu.classList.toggle('show');
  if (navMenu.classList.contains('show')) {
    navbarBtn.innerHTML = '<i class="fas fa-times fa-2x"></i>';
  } else {
    navbarBtn.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
  }
};

navbarBtn.addEventListener('click', toggleNavigation);
