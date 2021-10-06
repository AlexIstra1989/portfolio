$(function () {

  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

  $('.menu__burger, .menu a').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.menu__burger').toggleClass('menu__burger--active');

  });

  $('.menu__burger').click(function (event) {
    event.preventDefault();
    $('body').toggleClass('overflow');
  });

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 50) {
      $('.header').addClass('menu--fixed');
    } else {
      $('.header').removeClass('menu--fixed');
    }
  });

  var Mixer = mixitup('.portfolio__content');
});

