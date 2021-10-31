var lettersAndNumbersOfRgb = ["A","B","C","D","F",0,1,2,3,4,5,6,7,8,9];
var colorRgbSpan = document.getElementsByTagName("span")[0];
var btn = document.getElementsByTagName("button")[0];

btn.addEventListener("click", function(){
    var color=[];
    for(i=0; i<6; i++){
        color.push(lettersAndNumbersOfRgb[Math.floor(Math.random()*(15))])
    }
    colorRgbSpan.innerHTML="#"+color.join("");
    document.body.style.background="#"+color.join("")
})