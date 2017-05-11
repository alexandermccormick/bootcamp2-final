// NAVBAR HOVER ANIMATION
$("#navBar").find("a").hover(function(){
  $(this).addClass('shadow-highlight');
  }, function(){
  $(this).removeClass('shadow-highlight');
});
