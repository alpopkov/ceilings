$(function() {

  $('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function() {
    $('.menu ul').slideToggle();
  });


  function backToTop() {
    let button = $('.back_to_top');

    $(window).on('scroll', () => {
      if ($(this).scrollTop() >= 50) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });

    button.on('click', (e) => {
      e.preventDefault();
      $('html').animate({ scrollTop: 0 }, 500);
    })
  }

  backToTop();

});