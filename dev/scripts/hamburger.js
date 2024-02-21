// Get the elements
const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.navbar-menu');

// Add event listener to the hamburger menu
hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
    dropdown.classList.toggle('show-dropdown');
})