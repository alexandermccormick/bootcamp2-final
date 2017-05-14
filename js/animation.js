// NAVBAR HOVER

$("#navBar").find("a").hover(function(){
  $(this).addClass('shadow-highlight');
  }, function(){
  $(this).removeClass('shadow-highlight');
});

// PAGE TRANSITION
// home
$("#homeBtn").click(function(){
  $("li.active").removeClass('active'); // active btn change
  $("li.home-style").addClass('active'); // active btn change
  $("div.active-wrapper").removeClass('active-wrapper').addClass("wrapper");  // psudo 'page' change
  $("#home").addClass('active-wrapper'); // psudo 'page' change
});
// my work
$("#myWorkBtn").click(function(){
  $("li.active").removeClass('active');
  $("li.mywork-style").addClass('active');
  $("div.active-wrapper").removeClass('active-wrapper').addClass("wrapper");
  $("#myWork").addClass('active-wrapper');
});
// about
$("#aboutBtn").click(function(){
  $("li.active").removeClass('active');
  $("li.about-style").addClass('active');
  $("div.active-wrapper").removeClass('active-wrapper').addClass("wrapper");
  $("#about").addClass('active-wrapper');
});
// contact
$("#contactBtn").click(function(){
  $("li.active").removeClass('active');
  $("li.contact-style").addClass('active');
  $("div.active-wrapper").removeClass('active-wrapper').addClass("wrapper");
  $("#contact").addClass('active-wrapper');
});
