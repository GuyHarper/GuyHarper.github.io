$(() => {

  const $navbar = $('nav');
  const $navbarBumper = $('.navbar-bumper');

  const viewportHeight = $(window).height();
  const navbarHeight = $navbar.height();
  const scrollTarget = viewportHeight - navbarHeight;

  $(window).scroll(function () {
    if ($(window).scrollTop() > scrollTarget) {
      $navbar.addClass('fixed');
      $navbarBumper.show();
    } else if ($(window).scrollTop() <= scrollTarget) {
      $navbar.removeClass('fixed');
      $navbarBumper.hide();
    }
  });

  $('a').click(function(e) {
    const href = $(e.target).attr('href');
    $('html, body').animate({
      scrollTop: $(`${href}`).offset().top - $navbar.height() + 5
    }, 1000);
  });


});
