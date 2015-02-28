$( ".target" ).scroll(function(e) {
  var res = $(this).scrollPercentReached(25);
  $( ".log" ).append( "<div>Percent Reached:" + res +"</div>" );
});