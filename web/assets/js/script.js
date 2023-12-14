////faqs
$(document).ready(function () {
  // Initially hide all answers
  $('.accordion-item .answer').hide()

  // Add 'open' class to the first question
  $('.accordion-item:first-child').addClass('open').find('.answer').show()

  $('.accordion-item .question').click(function (event) {
    event.preventDefault() // Prevent default behavior

    var accordionItem = $(this).parent('.accordion-item')
    var answer = accordionItem.find('.answer')

    // Toggle the class immediately
    accordionItem.toggleClass('open')

    // Use transitionend event to handle the completion of slideToggle
    answer.slideToggle(500).one('transitionend', function () {
      // Code to execute after the slideToggle animation is complete
    })
  })
})

/////navigation
$('.toggle').click(function () {
  'use strict'
  $('nav ul').slideToggle()
})

$(window).resize(function () {
  'use strict'
  if ($(window).width() > 992) {
    $('nav ul').removeAttr('style')
  }
})
