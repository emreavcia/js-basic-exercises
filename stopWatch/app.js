window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds= document.getElementById("seconds");
    var btnStart= document.getElementsByClassName("btn-start");
    var btnStop= document.getElementsByClassName("btn-stop");
    var btnReset= document.getElementsByClassName("btn-reset");
    var interval;

    
    btnStart.onclick= function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    };

    btnStop.onclick=function(){
        clearInterval(interval);
    };

    btnReset.onclick = function(){
        clearInterval(interval);
        tens="00";
        seconds="00";
        appendTens.innerHTML=tens;
        appendSeconds.innerHTML= seconds;
    };

    function startTimer () {
        tens++;
        if(tens <=9) {
            appendTens.innerHTML = "0" +tens;
        }
        if(tens>9) {
            appendTens.innerHTML=tens;
        }
        if(tens > 99) {
            seconds++;
            appendSeconds.innerHTML= "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0"+0;
        }
        if (seconds >9){
            appendSeconds.innerHTML = seconds;
        }

    }
}