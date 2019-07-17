
$(document).ready(function(){
   
    $('#content-block').load("home.html");

    
   
      setTimeout(function () {
         var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
         if(width < 760){
         $("#pop-overlay").velocity("transition.fadeIn", {duration: 500, delay: 0 });
         }
      }, 500);
      

      



 });

 function goNext(){

    $('#content-block').load("page2.html");
    window.history.pushState("Details", "Title", "/amazon-redesign/page2/");

 }

 function closepop(){
   
   $("#pop-overlay").velocity("transition.fadeOut", {duration: 500, delay: 0 });

 }


