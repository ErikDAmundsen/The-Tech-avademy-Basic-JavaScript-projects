function getReceipts() {
    var text1 = "<h3> Your Order is:</h3>";
    var runningTotal = 0;
    var sizeTotal =0;
    var sizeArray= document.getElementsByClassName("size");

}
// text for you ordered
for (var i=0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
        var selectedSize = sizeArray[i].value;
        text1 = text1+selectedSize+" with <br>";
    }

}

// Price Calculation
 if (selectedSize === "Personal Pizza") {
    sizeTotal= 6;
 }else if (selectedSize === "Medium Pizza") {
        sizeTotal= 10;
 }else if (selectedSize === "Large Pizza") {
            sizeTotal= 14;
 }else if (selectedSize === "Extra-large Pizza") {
                sizeTotal= 16;
 }

 runningTotal=sizeTotal;
 console.log(selectedSize+" $"+sizeTotal+".00");
 console.log("size text1: "+text1);
 console.log("subtotal: $"+runningTotal+".00");

function  getMeat(runningTotal,text1) {
        var meatTotal =0;
        var selectedMeat =[];
        var meatArrray = document.getElementsByClassName("meats");

 }

//testing
 