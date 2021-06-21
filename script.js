//Navigation shows active page
var links = document.getElementsByClassName("nav-link");
var activePage = 0;

function activate(i) {
  links[activePage].className = "nav-link";
  activePage = i
  links[i].className = "nav-link active";
}

function clearActive() {
  for (var i = 0; i < links.length; i++) {
    links[i].className = "nav-link";
  }
}

//Testimonials Slideshow
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");
var slideIndex = 2;
var tOut;

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot-active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].classList.remove("hidden");
  dots[slideIndex-1].classList.add("dot-active");
  tOut = setTimeout(showSlides, 15000);
}

function go_to(n) {
  clearTimeout(tOut)
  slideIndex = n - 1;
  showSlides();
}