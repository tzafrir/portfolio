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

    if (delightCount > 4) {
      setTimeout(function() {
        $('section.delight p').addClass('shown')
      }, 600)  
    }
  })

})