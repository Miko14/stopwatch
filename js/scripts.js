var time = document.getElementById("time");
var timeMiliSeconds = document.getElementById("miliSeconds");
var hours = 0;
var minutes = 0;
var seconds = 0;
var miliSeconds = 0;
var t;
// leading zeros
var zh = "0";
var zm = "0";
var zs = "0";
var zms = "00";

$("#start").click(function() {
    console.log("START");
    time.style.color = "#075757";
    timeMiliSeconds.style.color = "#075757";
    timer(5);
});

$("#pause").click(function() {
    console.log("PAUSE");
    time.style.color = "#356464";
    timeMiliSeconds.style.color = "#356464";
    clearTimeout(t);
});

$("#stop").click(function() {
    console.log("STOP");
    time.style.color = "red";
    timeMiliSeconds.style.color = "red";
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliSeconds = 0;
    clearTimeout(t);
    var resultTime = "00:00:00";
    time.innerHTML = resultTime;
    var resultMiliSeconds = ":000";
    timeMiliSeconds.innerHTML = resultMiliSeconds;
});

function timer(value) {
    t = setTimeout(add, value);
}

function add() {
    miliSeconds+=6;
    if (miliSeconds < 9)
        zms = "0";
    else if (miliSeconds > 99)
        zms = "";
    if (miliSeconds >= 999) {
        miliSeconds = 0;
        zms = "000";
        seconds++;
        if (seconds > 9)
            zs = "";
        if (seconds >= 60) {
            seconds = 0;
            zs = "0";
            minutes++;
            if (minutes > 9)
                ms = "";
            if (minutes >= 60) {
                minutes = 0;
                zm = "0";
                hours++;
            }
        }
    }
    var resultTime = zh + hours + ":" + zm + minutes + ":" + zs + seconds;
    time.innerHTML = resultTime;

    var resultMiliSeconds = ":" + zms + miliSeconds;
    timeMiliSeconds.innerHTML = resultMiliSeconds;

    timer(5);
}









/*

var time = document.getElementById("time");
var miliSeconds = document.getElementById("miliSeconds");
var hours = 00;
var minutes = 00;
var seconds = 00;
var miliSeconds = 000;
// leading zeros
var zh = "0";
var zm = "0";
var zs = "0";
var zms = "00";

$("#start").click(function() {
    console.log("START");
    time.style.color = "#075757";    
    timer(1000);
});

$("#pause").click(function() {
    console.log("PAUSE");
    time.style.color = "#356464";
    clearTimeout(t);
});

$("#stop").click(function() {
    console.log("STOP");
    time.style.color = "red";
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliSeconds = 0;
    clearTimeout(t);
    var resultTime = "00:00:00";
    time.innerHTML = resultTime;
    miliSeconds.innerHTML = ":000";
});

function timer(value) {
    t = setTimeout(add, value);
}

function add() {
    seconds++;
    if (seconds > 9)
        zs = "";
    if (seconds >= 60) {
        seconds = 00;
        zs = "0";
        minutes++;
        if (minutes > 9)
            ms = "";
        if (minutes >= 60) {
            minutes = 00;
            zm = "0";
            hours++;
        }
    }
    var resultTime = zh + hours + ":" + zm + minutes + ":" + zs + seconds;
    document.getElementById("time").innerHTML = resultTime;

    var resultMiliSeconds = ":" + zms + miliSeconds;
    document.getElementById("miliSeconds").innerHTML = resultMiliSeconds;

    timer(1000);
}


*/