$(document).ready(function(){

  var quotesApi = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
  var proxy = "https://cors-anywhere.herokuapp.com/";


  $("#get-random-quote").click(function(){
    var quoteIconLeft = '<i class="fa fa-quote-left" aria-hidden="true"></i> ';
    var quoteIconRight = ' <i class="fa fa-quote-right" aria-hidden="true"></i>';
    var quoteAuthor = "";
    console.log("Get quote");
    $.get(proxy+quotesApi,function(data){
      console.log(data);
      $("#quote-text").html(quoteIconLeft+ data.quoteText +quoteIconRight);
      $("#quote-author").html("- " + data.quoteAuthor);

    });




  });


});
