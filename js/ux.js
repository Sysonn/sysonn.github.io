$( document ).ready(function() {
      
    //$('body,html').animate({scrollTop: 350}, 800);
    $('.basic-block').velocity("transition.fadeIn", {stagger: 150, drag: true, duration: 1000});
                
    
    });

    function goBack(){

        $("#root").velocity("transition.fadeOut", {duration: 500, delay: 0 });

        setTimeout(function(){
        $("#root").velocity("transition.fadeIn", {duration: 500, delay: 0 });
        $('#root').load('./home.back.html');
        }, 500); 
        //window.history.pushState("Details", "Title", "/amazon-redesign/page2/");
    
     };
    
     function amazonLoad(){

        $("#root").velocity("transition.fadeOut", {duration: 500, delay: 0 });
        setTimeout(function(){
        $("#root").velocity("transition.fadeIn", {duration: 500, delay: 0 });
        $('#root').load('./home.html');
        }, 500); 
        //window.history.pushState("Details", "Title", "/amazon-redesign/page2/");
    
     };
    