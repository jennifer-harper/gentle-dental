$(document).ready(function () {
  // Initially hide all answers
  $('.accordion-item .answer').hide()

  // Add 'open' class to the first question
  $('.accordion-item:first-child').addClass('open').find('.answer').show()

  $('.accordion-item .question').click(function (event) {
    event.preventDefault() // Prevent default behavior

    var accordionItem = $(this).parent('.accordion-item')
    accordionItem.find('.answer').slideToggle(500, function () {
      accordionItem.toggleClass('open', $(this).is(':visible'))
    })
  })
})
