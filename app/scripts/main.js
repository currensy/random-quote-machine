'use strict';
$(document).ready(function(){
  getQuote();
  $("#get-random-quote").click(function(){
    getQuote();
  });
  //$("#get-random-quote").click(getQuote());
});

function getQuote() {

  var quotesApi = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
  var proxy = "https://cors-anywhere.herokuapp.com/";

  var quoteIconLeft = '<i class="fa fa-quote-left" aria-hidden="true"></i> ';
  var quoteIconRight = ' <i class="fa fa-quote-right" aria-hidden="true"></i>';

  $.get(proxy+quotesApi,function(data){
    $("#quote-text").html(quoteIconLeft+ data.quoteText +quoteIconRight)
    $("#quote-author").html("- " + data.quoteAuthor);
    $("#tweet").attr("href","https://twitter.com/intent/tweet?text="+data.quoteText+" -"+data.quoteAuthor);
    $(".quote-block").css('visibility','visible').hide().fadeIn("slow");
  });
}
