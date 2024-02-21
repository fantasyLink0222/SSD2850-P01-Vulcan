// Hamburger menu
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar-menu');
let bod = document.querySelector('.container');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});