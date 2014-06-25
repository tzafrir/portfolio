$(function() {

  var delight = $('h2.delight'),
      delightCount = 0

  delight.hover(delightBounce)
  delight.click(delightBounce)

  function delightBounce() {
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
      }, 500)  
    }
  }


  $('header a[href="#work"]').click(function() {
    $('body').animate({scrollTop: $('#work').offset().top+60})
  })

})