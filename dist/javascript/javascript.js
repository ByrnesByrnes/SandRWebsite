$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('.logo img').addClass('shrink');
    $('.contact-info').addClass('hidden');
    $('nav').addClass('nav-float');
    $('a.scroll-up').removeClass('hidden');
  } else {
    $('.logo img').removeClass('shrink');
    $('.contact-info').removeClass('hidden');
    $('nav').removeClass('nav-float');
    $('a.scroll-up').addClass('hidden');
  }
});

$("a[href='#top']").click(function() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});

$('li a').click(function() {
  if($('li a').hasClass('active')) {
    $('li a').removeClass('active')
    $(this).addClass('active')
  } else {
    $(this).addClass('active')
  }
  
})
