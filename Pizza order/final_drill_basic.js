



function getReceipt(){
    // This initializes our string so it can get passed from  
	// function to function, growing line by line into a full receipt
    
var sizeArray = document.getElementsByClassName("size");
    var sizeTotal = 0;
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
// text for you ordered
for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
        var selectedSize = sizeArray[i].value;
        text1 = text1+selectedSize+"<br>";
    }
}


// Price Calculation for size
 if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
 } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
 } else if (selectedSize === "Large Pizza") {
            sizeTotal = 14;
 } else if (selectedSize === "Extra Large Pizza") {
                sizeTotal = 16;
 }

 

 runningTotal = sizeTotal;
 console.log(selectedSize+" = $"+sizeTotal+".00");
 console.log("size text1: "+text1);
 console.log("subtotal: $"+runningTotal+".00");
 getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};

//meat calculator
function getMeat(runningTotal,text1) {
        var meatTotal = 0;
        var selectedMeat = [];
        var meatArray = document.getElementsByClassName("meats");

 

for (var j = 0; j < meatArray.length; j++) {
    if (meatArray[j].checked) {
        selectedMeat.push(meatArray[j].value);
        console.log("selected meat item: ("+meatArray[j].value+")");
        text1 = text1+meatArray[j].value+"<br>";
    }
}
 var meatCount = selectedMeat.length;
 if (meatCount > 1) {
        meatTotal = (meatCount - 1);
 } else {
     meatTotal = 0;
 }
 runningTotal = (runningTotal + meatTotal);
 console.log("total selected meat items: "+meatCount);
 console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
 console.log("meat text1: "+text1);
 console.log("Purchase Total: "+"$"+runningTotal+".00");
 document.getElementById("showText").innerHTML = text1;
 document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
 getTopp(runningTotal,text1)
};

// other topping calculator
function getTopp (runningTotal,text1) {
    var toppTotal= 0;
    var selectedTopp = [];
    var toppArray = document.getElementsByClassName("toppings");

for (var k =0; k < toppArray.length; k++) {
    if (toppArray[k].checked) {
        selectedTopp.push(toppArray[k].value);
     console.log("selected topping item: ("+toppArray[k].value+")");
        text1= text1+toppArray[k].value+"<br>";
    }
}
        
var toppCount = selectedTopp.length;
if (toppCount > 1 ) {
        toppTotal= (toppCount - 1);

} else{
    toppTotal = toppTotal;

}
runningTotal = (runningTotal + toppTotal);
 console.log("total selected topping items: "+toppCount);
 console.log(toppCount+" topping - 1 free topping = "+"$"+toppTotal+".00");
 console.log ("topping text1: "+text1);
 console.log("Purchase Total: "+"$"+runningTotal+".00");
 
 getCheese(runningTotal,text1)
};

//CHeese
function getCheese(runningTotal,text1) {
 var cheeseTotal= 0; 
 var selectedCheese = [];
 var cheeseArray = document.getElementsByClassName("cheese");
   
 for (var c = 0; c < cheeseArray.length; c++) {
	if (cheeseArray[c].checked) {
		 selectedCheese = cheeseArray[c].value;
		
	}
     if (selectedCheese === "Extra Cheese") {
        cheeseTotal= 3;
 }
}
	
 text1 = text1+selectedCheese+"<br>";
 runningTotal=(runningTotal+cheeseTotal);
 console.log(selectedCheese+" $"+cheeseTotal+".00");
 console.log("cheese text1: "+text1);
 console.log("subtotal: $"+runningTotal+".00");
 getSauce(runningTotal,text1)
};

//Sauce
function getSauce(runningTotal,text1) {
    
 var sauceArray = document.getElementsByClassName("Sauce");
 
 for (var s = 0; s < sauceArray.length; s++) {
	if (sauceArray[s].checked) {
		 selectedSauce = sauceArray[s].value;
		text1 = text1+selectedSauce+"<br>"
    }
    
    
}

 getCrust(runningTotal,text1)
};
    //Crust
    	
    function getCrust(runningTotal,text1) {
        var crustTotal= 0;
        var selectedCrust;
        var crustArray = document.getElementsByClassName("Crust");
        for (var cr = 0; cr < crustArray.length; cr++) {
            if (sizeArray[cr].checked) {
                 selectedCrust = crustArray[cr].value;
                text1 = text1 + selectedCrust+"<br>";
            
        }
        if (selectedCrust === "Cheese Stuffed Crust") {
            crustTotal = 3;
        }
    }
        runningTotal = (runningTotal+crustTotal);
        console.log(selectedCrust+" = $"+runningTotal+".00");
        console.log("crust text1: "+text1);
        console.log("subtotal: $"+runningTotal+".00");
        
    };
            







