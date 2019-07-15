$(document).ready(function() {    
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

    setTimeout(function(){
        $('#footer-home').velocity("transition.fadeIn", {duration: 2000, delay: 800 });
    }, 3400);

   

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

AboutSvgHover = function(){
    $(".st0").css("fill","blue");
    $(".st1").css("fill","blue");
    $(".st2").css("fill","blue");
};

AboutSvgOut = function(){
    $(".st0").css("fill","#606060");
    $(".st1").css("fill","#606060");
    $(".st2").css("fill","#606060");
};


ContactSvgHover = function(){
    $(".st0").css("fill","red")
    console.log($(".st0").attr('height'));
};

ContactSvgOut = function(){
    $(".st0").css("fill","#606060");
};

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $img.attr('height') + ' ' + $img.attr('width'))
        }

        $svg.attr('width') =  $img.attr('width');
        //$svg.attr('viewBox', '0 0 ' + $img.attr('height') + ' ' + $img.attr('width'))
        
        // Replace image with new SVG
        $img.replaceWith($svg);

        $()
        console.log($img.attr('height'));
        console.log($svg.attr('height'));

    }, 'xml');

});



});

