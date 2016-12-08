// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

var $all = new Array();

$(document ).ready(function() {

  $.ajax({
      async: false,
      type: "GET",
	  url: 'http://www.mattbowytz.com/simple_api.json?data=interests',
	  dataType:'json',
	  type: "GET",
	  success: function(data){
		$all = $.merge(data.data, $all);
	  }
  });
    $.ajax({
      async: false,
      type: "GET",
	  url: 'http://www.mattbowytz.com/simple_api.json?data=programming',
	  dataType: 'json',
	  success: function(data){
		  $all = $.merge(data.data, $all);

	  }
  });
    $.ajax({
      async: false,
      type: "GET",
	  url: 'http://www.mattbowytz.com/simple_api.json?data=comics',
	  dataType: 'json',
	  success: function(data){
		  $all = $.merge(data.data, $all);
	  }
  });
    console.log($all);
});

$(".flexsearch-input").keyup(function(event){
   jQuery('#output').html('');
  var i =0;
  var j = 0;
  var $results = new Array();
  var $input = $(".flexsearch-input").val().toLowerCase();
  var $temp = 0;

  if($input.length==0){
    $("#output").hide();
    return;
  }
  for(i = 0; i < $all.length; i++){
    $temp = $all[i].toLowerCase();
    if($temp.substring(0,$input.length)==$input){
      $results.push($all[i]);
      j++;
    }
  }
  for(i = 0; i < j; i++){
       var $line = $results.pop();
      $temp = 'https://www.google.com/#q=' + $line;
      $('#output').append('<li><a target="_blank" href="http://www.google.com/search?q=' + $line + '">' + $line + '</a></li>')
      $("#output").show();
  }

});
