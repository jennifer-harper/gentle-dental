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

// $(document).ready(function () {
//   'use strict'

//   // Hide dropdown initially
//   $('.dropdown-nav').hide()

//   // Toggle navigation on click
//   $('.toggle').click(function () {
//     $('nav ul').slideToggle() // Change the selector to target the top-level ul
//     $('.dropdown-nav').toggleClass('open') // Add or remove the 'open' class
//   })

//   // Handle dropdown hover
//   $('.dropdown').hover(function () {
//     // Mouse enters dropdown
//     $('.dropdown-nav').stop().slideDown().addClass('open')
//   })

//   // Close dropdown on anchor click
//   $('.dropdown-nav a').click(function (e) {
//     e.stopPropagation() // Prevent the dropdown from closing when clicking an anchor
//   })

//   // Close dropdown when clicking outside the dropdown or when mouse leaves .dropdown-nav
//   $(document).on('click', function (e) {
//     if (!$(e.target).closest('.dropdown').length) {
//       $('.dropdown-nav').slideUp().removeClass('open') // Change the selector here
//     }
//   })

//   // Prevent closing when mouse is over .dropdown-nav
//   $('.dropdown-nav').hover(
//     function () {
//       // Mouse enters dropdown-nav
//     },
//     function () {
//       // Mouse leaves dropdown-nav
//       $('.dropdown-nav').slideUp().removeClass('open') // Change the selector here
//     }
//   )
// })

$(document).ready(function () {
  'use strict'
  $('.dropdown-nav').hide()

  $('.toggle').click(function () {
    $('nav ul').slideToggle()
  })

  const mediaQuery = window.matchMedia('(max-width: 992px)')

  if (mediaQuery.matches) {
    $('nav ul').removeAttr('style')

    // Toggle navigation on click
    $('.dropdown').click(function () {
      $('.dropdown-nav').toggleClass('open') // Add or remove the 'open' class
    })

    // Handle dropdown hover
    $('.dropdown').hover(function () {
      // Mouse enters dropdown
      $('.dropdown-nav').stop().slideDown().addClass('open')
    })
  } else {
    // Toggle navigation on click
    $('.dropdown').click(function () {
      $('.dropdown-nav').toggleClass('open') // Add or remove the 'open' class
    })

    // Handle dropdown hover
    $('.dropdown').hover(function () {
      // Mouse enters dropdown
      $('.dropdown-nav').stop().slideDown().addClass('open')
    })

    // Close dropdown on anchor click
    $('.dropdown-nav a').click(function (e) {
      e.stopPropagation() // Prevent the dropdown from closing when clicking an anchor
    })

    // Close dropdown when clicking outside the dropdown or when mouse leaves .dropdown-nav
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.dropdown').length) {
        $('.dropdown-nav').slideUp().removeClass('open') // Change the selector here
      }
    })

    // Prevent closing when mouse is over .dropdown-nav
    $('.dropdown-nav').hover(
      function () {
        // Mouse enters dropdown-nav
      },
      function () {
        // Mouse leaves dropdown-nav
        $('.dropdown-nav').slideUp().removeClass('open') // Change the selector here
      }
    )
  }
})
