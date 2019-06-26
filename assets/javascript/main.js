// Use TypeIt.js
$(document).ready(function () {
  if (typeof TypeIt != 'undefined') {
    new TypeIt('.passion', {
      speed: 200,
      startDelay: 800,
      strings: ['UI/UX Designer'],
      breakLines: false,
      loop: true
    });
  } else {
    return false;
  }
});


// Page Transitions
var pageFromTo = function (from, to) {
  $('.main-content').removeClass('scaleDownFromFront').removeClass('scaleUpFromFront');
  from.addClass('scaleUpFromFront');
  to.addClass('scaleDownFromFront');
};
// The .box-wrapper is clicked
$('.box-wrapper').on('click', function () {

  var parentOfChild = $(this)[0].id;
  switch (parentOfChild) {
    case 'about_box':
      pageFromTo($('#home'), $('#about'));
      break;
    case 'resume_box':
      pageFromTo($('#home'), $('#resume'));
      break;
    case 'portfolio_box':
      pageFromTo($('#home'), $('#portfolio'));
      break;
    case 'contact_box':
      pageFromTo($('#home'), $('#contact'));
      break;
  }
});
// The close button is clicked
$('.main-content').on('click', '.back-btn', function () {

  var parentOfChild = $(this)[0].parentNode.parentNode.id;
  switch (parentOfChild) {
    case 'about':
      pageFromTo($('#about'), $('#home'));
      break;
    case 'resume':
      pageFromTo($('#resume'), $('#home'));
      break;
    case 'portfolio':
      pageFromTo($('#portfolio'), $('#home'));
      break;
    case 'contact':
      pageFromTo($('#contact'), $('#home'));
      break;
  }
});
//Contact Me button is clicked
$('.button-wrapper').on('click', '#contact-me a', function () {
  pageFromTo($('#about'), $('#contact'));
});


