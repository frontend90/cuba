/**************   burger    **********************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
  }
});

$('.main-menu a').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
});

/*************   WOW   *****************/
new WOW().init();

/************    gallery slick      **************/
$('.gallery-slider').slick({
  prevArrow: $('.gallery-slider-left'),
  nextArrow: $('.gallery-slider-right'),
  dots: false,
  autoplay: true,
  speed: 1500
});