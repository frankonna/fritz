window.onscroll = function() {toggleSticky()};

const header = document.getElementById("myHeader");
const stickyPoint = 300; // Change to the scroll point you want

function toggleSticky() {
  if (window.scrollY > stickyPoint) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
const scrollTrigger = 100; // change to the scrollY point you prefer

window.addEventListener("scroll", function () {
  if (window.scrollY > scrollTrigger) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});