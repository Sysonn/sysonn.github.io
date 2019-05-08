$(document).ready(function() {    
    $('body,html').animate({scrollTop: top});

     $('#diamond-white').velocity({  rotateZ:45}, { duration: 0});
     $('#diamond-red').velocity({  rotateZ:45, backgroundColorAlpha: .5 }, { duration: 0});
     $('#diamond-yellow').velocity({  rotateZ:45, backgroundColorAlpha: .5  }, { duration: 0});
     $('#diamond-blue').velocity({  rotateZ:45, backgroundColorAlpha: .5  }, { duration: 0});
    
 
        $('#diamond-block').css('display', 'block'); 

     

     $("#diamond-red").velocity("transition.slideUpBigIn", {duration: 1500, delay: 0 },"transition.fadeIn", {duration: 2000, delay: 100 } );
     $("#diamond-yellow").velocity("transition.slideUpBigIn", {duration: 1500, delay: 200 }, "transition.fadeIn", {duration: 1800, delay: 200 });
     $("#diamond-blue").velocity("transition.slideUpBigIn", {duration: 1500, delay: 500 }, "transition.fadeIn", {duration: 1800, delay: 500 });


        $('#diamond-white').velocity("transition.fadeIn", {duration: 2000, delay: 800 });


 
        $('#logo-container').velocity("transition.slideUpBigIn", {duration: 1800, delay: 500 }, "transition.fadeIn", {duration: 2000, delay: 800 });



        $('.basic-block').velocity("transition.fadeIn", {stagger: 150, drag: true, duration: 1200});

   

        $('body,html').animate({scrollTop: 600}, 900);
      
        
    


        $('#w-red').velocity({opacity: .5 }, { duration: 0});
        $('#w-yellow').velocity({opacity: .5 }, { duration: 0});
        $('#w-blue').velocity({opacity: .5 }, { duration: 0});
        $('#welcome-container').velocity("transition.slideUpBigIn", {duration: 1800, delay: 500 }, "transition.fadeIn", {duration: 2000, delay: 800 });


   



});