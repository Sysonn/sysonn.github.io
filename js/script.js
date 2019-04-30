
$('#diamond-block').hover(function(){
    console.log('hover')
});
    
//$(document).ready(function() {
window.onload = function() {
        
        $('body,html').animate({scrollTop: top});

         $('#diamond-white').velocity({  rotateZ:45}, { duration: 0});
         $('#diamond-red').velocity({  rotateZ:45, backgroundColorAlpha: .5 }, { duration: 0});
         $('#diamond-yellow').velocity({  rotateZ:45, backgroundColorAlpha: .5  }, { duration: 0});
         $('#diamond-blue').velocity({  rotateZ:45, backgroundColorAlpha: .5  }, { duration: 0});
        
         setTimeout(function(){
            $('#diamond-block').css('display', 'block'); 
        }, 600);
         
    
         $("#diamond-red").velocity("transition.slideUpBigIn", {duration: 1500, delay: 0 },"transition.fadeIn", {duration: 2000, delay: 100 } );
         $("#diamond-yellow").velocity("transition.slideUpBigIn", {duration: 1500, delay: 200 }, "transition.fadeIn", {duration: 1800, delay: 200 });
         $("#diamond-blue").velocity("transition.slideUpBigIn", {duration: 1500, delay: 500 }, "transition.fadeIn", {duration: 1800, delay: 500 });

         setTimeout(function(){
            $('#diamond-white').velocity("transition.fadeIn", {duration: 2000, delay: 800 });
        }, 700);

         setTimeout(function(){
            $('#logo-container').velocity("transition.slideUpBigIn", {duration: 1800, delay: 500 }, "transition.fadeIn", {duration: 2000, delay: 800 });
        }, 1500);

        setTimeout(function(){
            $('.basic-block').velocity("transition.fadeIn", {stagger: 150, drag: true, duration: 1200});
        }, 4000);
       
    
        setTimeout(function(){
            $('body,html').animate({scrollTop: 600}, 900);
            }, 3500, 'easeOutExpo');       
            
        


        setTimeout(function(){
            $('#w-red').velocity({opacity: .5 }, { duration: 0});
            $('#w-yellow').velocity({opacity: .5 }, { duration: 0});
            $('#w-blue').velocity({opacity: .5 }, { duration: 0});
            $('#welcome-container').velocity("transition.slideUpBigIn", {duration: 1800, delay: 500 }, "transition.fadeIn", {duration: 2000, delay: 800 });
        }, 3200);

       

//--------FUN ANIMATION (save for later) ---------------------------------------------------//
    // $('#diamond-red').velocity({  rotateZ:90 }, {duration: 1000});
            // $('#diamond-yellow').velocity({  rotateZ:90 }, {duration: 1000, delay: 200});
            // $('#diamond-blue').velocity({  rotateZ:90 }, {duration: 1000, delay: 500});

    //     setTimeout(function(){
    //         $('#diamond-red').velocity({  rotateZ:135 }, {duration: 1000});
    //         $('#diamond-yellow').velocity({  rotateZ:135 }, {duration: 1000, delay: 0});
    //         $('#diamond-blue').velocity({  rotateZ:135 }, {duration: 1000, delay: 0});
    //     }, 4000);
//----------------------------------------------------------------------------------------//

//});
 };

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
    }, 500); 
    //window.history.pushState("Details", "Title", "/amazon-redesign/page2/");

 };

 