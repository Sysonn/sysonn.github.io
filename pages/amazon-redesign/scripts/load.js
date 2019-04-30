
$(document).ready(function(){
   
    $('#content-block').load("home.html");
 
 });

 function goNext(){

    $('#content-block').load("page2.html");
    window.history.pushState("Details", "Title", "/amazon-redesign/page2/");

 }