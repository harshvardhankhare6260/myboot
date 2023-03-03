const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');

prevButton.addEventListener('click', () => {
  slider.scrollBy({
    left: -slider.offsetWidth,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  slider.scrollBy({
    left: slider.offsetWidth,
    behavior: 'smooth'
  });
});
var searchInput = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  var searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    window.location.href = "https://www.google.com/search?q=" + searchTerm;
  }
});