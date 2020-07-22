// header class

document.querySelector('.language-toggle').addEventListener('click', () => {
    document.querySelector('.language-toggle').classList.toggle('open');
    document.querySelector('.language-select').classList.toggle('block');
  });

//   sticky-wrapper

window.onscroll = function() {myFunction()};

var header = document.getElementById("sticky-wrapper");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Slick Slider

$('.program-day-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true, 
    cssEase: 'linear',
    draggable: false,
});