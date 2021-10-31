//variables

var decreaseBtn = document.getElementById("decrease");
var increaseBtn = document.getElementById("increase");
var resetBtn = document.getElementById("reset");
var counterNumber = document.getElementById("counterNumber");
var incrementer=0;

//variables

//Decrease button
decreaseBtn.addEventListener("click", function(){
    incrementer= incrementer-1;
    counterNumber.innerHTML= incrementer;
    if(incrementer<0){
        counterNumber.style.color = "red"
    }
    else if (incrementer>0) {
        counterNumber.style.color = "green"
    }else {
        counterNumber.style.color = "black"
    }
})
//Decrease button

//Increase
increaseBtn.addEventListener("click", function(){
    incrementer= incrementer+1;
    counterNumber.innerHTML= incrementer;
    if(incrementer<0){
        counterNumber.style.color = "red"
    }
    else if (incrementer>0) {
        counterNumber.style.color = "green"
    } else {
        counterNumber.style.color = "black"
    }
})
//Increase

//Reset
resetBtn.addEventListener("click", function(){
    incrementer= 0;
    counterNumber.innerHTML= incrementer;
    counterNumber.style.color = "black"
})
//Reset


