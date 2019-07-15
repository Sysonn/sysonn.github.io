$( document ).ready(function() {
    $('#root').load('./home.html');
});
    


$('#diamond-block').hover(function(){
    console.log('hover')
});

    

var ScrollClick = function(){

    setTimeout(function(){
    $('body,html').animate({scrollTop: 350}, 800);
    }, 3500, 'easeOutExpo');

};


function goNext(){

    $("#root").velocity("transition.fadeOut", {duration: 500, delay: 0 });
    setTimeout(function(){
    $("#root").velocity("transition.fadeIn", {duration: 500, delay: 0 });
    $('#root').load('./ux.html');
    //window.location.href = './ux.html';
    }, 500); 
    //window.history.pushState("Details", "Title", "/amazon-redesign/page2/");

 };

 function loadResume(){

    window.open('/resume/dereksisson.pdf');

 };

 function loadContact(){

    $("#root").velocity("transition.fadeOut", {duration: 500, delay: 0 });
    setTimeout(function(){
    $("#root").velocity("transition.fadeIn", {duration: 500, delay: 0 });
    $('#root').load('./contact-me.html');
    }, 500); 

 };

 
 function loadAbout(){

    $("#root").velocity("transition.fadeOut", {duration: 500, delay: 0 });
    setTimeout(function(){
    $("#root").velocity("transition.fadeIn", {duration: 500, delay: 0 });
    $('#root').load('./about-me.html');
    }, 500); 

 };
