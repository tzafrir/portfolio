$(function() {

  var delight = $('h2.delight'),
      delightCount = 0

  delight.hover(function() {

    if (!delight.hasClass('animating')) {
      delight.addClass('animating')
      setTimeout(function() {
        delight.removeClass('animating')
      }, 800)
      delightCount++;
    }

    if (delightCount > 5) {
      $('section.delight p').fadeIn()
    }
  })

})