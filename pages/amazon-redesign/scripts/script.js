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

function scrollBoxRight(){
    var leftPos = $('#scroll-inner').scrollLeft();
    $("#scroll-inner").animate({scrollLeft: leftPos + 500}, 200);
 
 }

 function scrollBoxLeft(){
    var leftPos = $('#scroll-inner').scrollLeft();
    $("#scroll-inner").animate({scrollLeft: leftPos - 500}, 200);
 
 }

