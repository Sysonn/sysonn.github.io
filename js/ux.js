$( document ).ready(function() {

  
      
    //$('body,html').animate({scrollTop: 350}, 800);
    $('.basic-block').velocity("transition.fadeIn", {stagger: 150, drag: true, duration: 1000});
   
    $("#pop-overlay").css("display","block");

    setTimeout(function(){
      $("#pop").velocity("transition.fadeOut", {duration: 500, delay: 0 });
      }, 100);

    setTimeout(function(){
      $("#pop-overlay").velocity("transition.fadeOut", {duration: 500, delay: 0 });

      }, 1000);

      $("#pop-overlay").css("display","none");

    });

    function goBack(){

        $("#root").velocity("transition.fadeOut", {duration: 500, delay: 0 });

        setTimeout(function(){
        $("#root").velocity("transition.fadeIn", {duration: 500, delay: 0 });
        $('#root').load('./home.back.html');
        }, 500); 
        //window.history.pushState("Details", "Title", "/amazon-redesign/page2/");
    
     };

     function goBackProjects(){

      $("#root").velocity("transition.fadeOut", {duration: 500, delay: 0 });

      setTimeout(function(){
      $("#root").velocity("transition.fadeIn", {duration: 500, delay: 0 });
      $('#root').load('./ux.html');
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

     function moreGhostLoad(){

      $("#root").velocity("transition.fadeOut", {duration: 500, delay: 0 });
      setTimeout(function(){
      $("#root").velocity("transition.fadeIn", {duration: 500, delay: 0 });
      $('#root').load('./pages/more-projects/ghost-link.html');
      }, 500); 
  
   };

   function moreWestRockLoad(){

      $("#root").velocity("transition.fadeOut", {duration: 500, delay: 0 });
      setTimeout(function(){
      $("#root").velocity("transition.fadeIn", {duration: 500, delay: 0 });
      $('#root').load('./pages/more-projects/dds.html');
      // $('#root').load('./pages/more-projects/GlobalDDS');
      }, 500); 
  
   };

   function projectSuiteLoad(){

      $("#root").velocity("transition.fadeOut", {duration: 500, delay: 0 });
      setTimeout(function(){
      $("#root").velocity("transition.fadeIn", {duration: 500, delay: 0 });
      $('#root').load('./pages/more-projects/project-suite.html');
      }, 500); 
  
   };
    
    