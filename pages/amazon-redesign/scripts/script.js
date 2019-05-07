//----------------------------------------//
// Amazon ReDesign - Derek Sisson (2019)  //
//----------------------------------------//

var array1 = ['Red', 'Orange', 'Blue', 'Purple', 'Green'];

//---- String Input ----//
function myFunction(stringInput) { // Declare a function
    document.getElementById("demo").innerHTML = stringInput;
  };

//---- Color List Changer ----//
function colorList(){
    for(let i = 0; i < array1.length; i++){  
        setTimeout(function () {
            document.getElementById("demo2").innerHTML = array1[i]; 
            document.getElementById("demo2").style.color = array1[i]; 
        }, i*1000);
    }
};

//-- Trial 2 --//
funcName = (params) => {console.log(params + 2);};
funcName(3);

//---- Focus Search Wrapper ---//
function focusSearchBar(){
    //document.getElementById("search-bar-main").style.boxShadow ="0 0 10px #719ECE";
    //document.getElementById("search-submit-main").style.boxShadow ="0 0 10px #719ECE";
}

//---test--//



// var scrollDiv = function(){

//     console.log('scrollDiv called.')
//     //$('#carousel-wrapper').animate({scrollLeft}, 300);
//     $('#carousel-wrapper').animate( { scrollLeft: '+=460' }, 1000);

//     // var leftPos = $('#carousel-wrapper').scrollLeft();
//     // $("#carousel-wrapper").animate({scrollLeft: leftPos - 200}, 800);

// }

var scrollDiv = function(){

    console.log('called');

    $('html,body').animate({
        scrollLeft: $('#carousel-wrapper').css('right')
    }, 500, function() {

        $('html, body').animate({
            scrollLeft: 0
        }, 500);

    });
}


