/* eslint-disable */
!(function ($) {

  $('.navigation-menu>li').slice(-1).addClass('last-elements');

  $('.menu-arrow,.submenu-arrow').on('click', function (e) {
    if ($(window).width() < 992) {
      e.preventDefault();
      $(this).parent('li').toggleClass('open').find('.submenu:first')
        .toggleClass('open');
    }
  });

  // Clickable Menu
  $('.has-submenu a').click(function () {
    if (window.innerWidth < 992) {
      if ($(this).parent().hasClass('open')) {
        $(this).siblings('.submenu').removeClass('open');
        $(this).parent().removeClass('open');
      } else {
        $(this).siblings('.submenu').addClass('open');
        $(this).parent().addClass('open');
      }
    }
  });

  // Sticky
  $(window).scroll(() => {
    const scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $('.sticky').addClass('nav-sticky');
    } else {
      $('.sticky').removeClass('nav-sticky');
    }
  });

  // Tooltip
  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });
  // Popover
  $(() => {
    $('[data-toggle="popover"]').popover();
  });
  // Feather icon
}(jQuery));
