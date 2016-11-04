angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this
    $(document).ready(function(){
  $(window).resize(function(){
    var windowHeight = $(window).height();
    var ninetypercent = .9 * windowHeight;
    $(document).scroll(function(){
      var y = $(this).scrollTop();
      if( y > ninetypercent) {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    });
  }).resize();
  
}); // jQuery
  })