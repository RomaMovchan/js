var time = 1;
var running = 0;
var splitCount = 1;
var startPauseButton = document.getElementById("startPause");
var clear = document.getElementById("stop");
var split = document.getElementById("split");
var splitField = document.getElementById("split-field");
var output = document.getElementById("output");
var hours = document.getElementById("hours");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var ms = document.getElementById("ms");
var tenths;

function startPause(){
    if(running == 0){
        running = 1;
        increment();
        startPauseButton.innerHTML = "Pause";
        startPauseButton.style.background="#2F9FEA";
    }else{
        running =0;
        startPauseButton.innerHTML = "Cont..";
        startPauseButton.style.background="#1eb91e";
    }
}

function increment(){
    if (running == 1){
        setTimeout(function(){
            time++;
            hours = Math.floor(time/100/60/60);
            min = Math.floor(time/100/60);
            sec = Math.floor(time/100);
            tenths = time%100;
            if(min<10){
                min = "0" + min;
            }
            if(sec<10){
                sec = "0" + sec;
            }
            output.innerHTML ="0" + hours + ":" + min + ":" + sec ;
            ms.innerHTML = tenths;
            increment();
        },10);
    }
}

function writeSplit(){
    var createP = document.createElement("p");
    createP.innerHTML = "Split #"+splitCount + " = " + "0" + hours + ":" + min + ":" + sec + ":" + tenths;
    splitField.appendChild(createP);
}

startPauseButton.onclick = function() {
    startPause();
};

clear.onclick = function(){
    running = 0;
    time = 0;
    splitCount = 1;
    startPauseButton.innerHTML = "Start";
    output.innerHTML = "00:00:00";
    ms.innerHTML = "0";
    splitField.innerHTML = "";
};

split.onclick = function() {
    writeSplit();
    splitCount++;
};


