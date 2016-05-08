function winResize() {
  $('#home').height(window.innerHeight);
  $('#connect').height(window.innerHeight);
}

winResize();

$(window).resize(function() {
  winResize();
});

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
  var id = $(this).attr('href'); // target element id

  var $id = $(id); // target element

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $(id).offset().top;

  // animated top scrolling
  $('body, html').animate({
    scrollTop: pos
  }, 'slow');
});
var previous_scroll = $(window).scrollTop();

$(window).on('scroll', function() {
  var scroll = $(window).scrollTop(),
    scroll_change = scroll - previous_scroll;
  previous_scroll = scroll;
  $(window).trigger('custom_scroll', [scroll_change]);
});
$(window).on('custom_scroll', function pos(e, scroll_change) {
   //if($('#navgation').css("display") != 'none'){
  if (scroll_change > 0) {
   
    
    $('#navgation').slideUp("slow");
  //  $('#navbardetection').style.display = 'block'; //document.getElementById('navgation').style.display = 'none';
  } else {
   // $('#navgation').show("slow");
   $('#navgation').slideDown("slow"); //document.getElementById('navgation').style.display = 'block';
  }
});
