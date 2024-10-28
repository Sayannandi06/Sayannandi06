// Get the navbar
const navbar = document.getElementById('navbar');

// Add an event listener to track scrolling
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add 'scrolled' class when page is scrolled down
    } else {
        navbar.classList.remove('scrolled'); // Remove class when at top of the page
    }
});
