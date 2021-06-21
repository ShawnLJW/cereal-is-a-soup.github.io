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