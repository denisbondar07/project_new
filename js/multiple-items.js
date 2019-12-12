$(document).ready(function(){
    $('.multiple-items').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      dots: true,
      slidesToShow: 3,
      variableWidth: true,
      arrows:true,
      dotsClass:"multiple_dots",
      // prevArrow: "<img src='https://img/news/left arrow.png' class='prev' alt='1'>",
      // nextArrow: "<img src='https://svgshare.com/i/6Gf.svg' class='next' alt='2'>",
    });
  });