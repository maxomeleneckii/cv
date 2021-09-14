const button = document.querySelector('.burger-menu');
const burgerNav = document.querySelector('.burger-nav');
const body = document.querySelector('body');
const navItem = document.querySelectorAll('.navigation-item');
if (button) {
  button.addEventListener('click', function (show) {
    button.classList.toggle('active');
    burgerNav.classList.toggle('active');
    body.classList.toggle('block');
  });
}

function lol(e) {
  if (button.classList.contains('active')) {
    button.classList.remove('active');
    burgerNav.classList.remove('active');
    body.classList.remove('block');
  }
}