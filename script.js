var slideIndex = 2;
var activePage = 0;
var to;

function go_to(n) {
  clearTimeout(to)
  slideIndex = n - 1;
  showSlides();
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].classList.remove("hidden");
  dots[slideIndex-1].classList.add("active");
  to = setTimeout(showSlides, 15000);
}

function expandNav() {
  var x = document.getElementById("dropdown");
  if (x.className === "dropdown") {
    x.className += " dropdownActive";
  } else {
    x.className = "dropdown";
  }
}

var links = document.getElementsByClassName("nav-link");

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