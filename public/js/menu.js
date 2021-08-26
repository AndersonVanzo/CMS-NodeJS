$(window).on('load', () => {
  'use strict';

  $('.menu-btn').on('click', () => {
    if ($('.menu-btn').hasClass('active')) {
      $('.menu-btn').removeClass('active');
      $('.menu-mobile').removeClass('active');
      $('body').removeClass('no-scroll');
    } else {
      $('.menu-btn').addClass('active');
      $('.menu-mobile').addClass('active');
      $('body').addClass('no-scroll');
    }
  })
})