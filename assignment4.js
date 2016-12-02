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

var all;

(function() {
	var comics;
	var interests;
	var programming;
  $.ajax({
	  async:false,
	  url: 'http://www.mattbowytz.com/simple_api.json?data=interests',
	  type: 'GET',
	  text:'text',
	  success: function(data){
		  interests = data;

	  }
  })
    $.ajax({
	  async:false,
	  url: 'http://www.mattbowytz.com/simple_api.json?data=programming',
	  type: 'GET',
	  text:'text',
	  success: function(data){
		  programming = data;

	  }
  })
    $.ajax({
	  async:false,
	  url: 'http://www.mattbowytz.com/simple_api.json?data=comics',
	  type: 'GET',
	  text:'text',
	  success: function(data){
		  comics = data;

	  }
  })
 
})();


$(".flexsearch-input").keyup(function(){
	var input = $('input.flexsearch-input').val();
	var output = [];
	

});
