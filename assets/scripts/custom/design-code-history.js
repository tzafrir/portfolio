/* Disclaimer: the following code was written very quickly */

$(function() {
  $('.toc').click(function() {
    var $this = $(this)
    if (! $this.hasClass('tocOn')) {
      openTOC()
    }
  })

  $('.toc a').click(function(e){
    closeTOC()
    e.preventDefault()
    var $this = $(this)
    var target = $this.attr('href')
    var targetTop = $(target).offset().top
    if ($('.toc .arrow').is(':visible')) {
      $('body').animate({scrollTop: targetTop - 50})
    } else {
      $('body').animate({scrollTop: targetTop - 50}, 1)
    }
  })

  $('body').click(function(e){
    if($(e.target).closest('.toc').length === 0){
      closeTOC()
      $('.toc').removeClass('tocOff')
    }
  });

  function closeTOC() {
    $('.toc').removeClass('tocOn')
    $('.toc').addClass('tocOff')
    console.log('removed')
  }

  function openTOC() {
    var $toc = $('.toc')
    if ($toc.hasClass('tocOff')) {
      $toc.removeClass('tocOff')
    } else {
      $('.toc').addClass('tocOn')
      console.log('added')
    }
    
  }
})