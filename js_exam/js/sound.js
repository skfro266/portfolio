//#snd 접근법
// $("#snd") -> jQuery
// document.getElementById("snd") -> ES5
// document.querySelector("#snd") -> ES6

/* 
//paused 속성 사용
//jQuery
document.querySelector("#snd").play();
$("#bt_play").click(function () {
    if ($("#snd")[0].paused) {
        $("#snd")[0].play();
        $(this).removeClass("fa-play-circle").addClass("fa-pause-circle");
    } else {
        $("#snd")[0].pause();
        $(this).removeClass("fa-pause-circle").addClass("fa-play-circle");
    }
});
 */

/*
//순수 자바스크립트
document.querySelector("#bt_play").addEventListener("click", function () {
    if (document.querySelector("#snd").paused) {
        document.querySelector("#snd").play();
        this.classList.toggle("fa-play-circle", false);
        this.classList.toggle("fa-pause-circle", true);
    } else {
        document.querySelector("#snd").pause();
        this.classList.toggle("fa-play-circle", true);
        this.classList.toggle("fa-pause-circle", false);
    }
});

var snd = document.querySelector("#snd");
var btPlay = document.querySelector("#bt_play");
btPlay.addEventListener("click", soundPlay);

function soundPlay(){
    if (snd.paused) {
        snd.play();
        this.classList.toggle("fa-play-circle", false);
        this.classList.toggle("fa-pause-circle", true);
    } else {
        snd.pause();
        this.classList.toggle("fa-play-circle", true);
        this.classList.toggle("fa-pause-circle", false);
    }
}
*/

$("#snd")[0].volume = 0.5;

function musicPLay(opt){
    if(opt){
        $("#snd")[0].play();
        $("#bt_play").removeClass("fa-play-circle").addClass("fa-pause-circle");
    }
    else{
        $("#snd")[0].pause();
        $("#bt_play").removeClass("fa-pause-circle").addClass("fa-play-circle");
    }
}

$("#bt_play").on("click", function () {
    if ($("#snd")[0].paused) musicPLay(true); 
    else musicPLay(false);
});

$("#sel_snd").on("change", function(){
    $("#snd")[0].src = $(this).val();
    musicPLay(true);
});

$("[data-slider]").on("slider:ready",function(e, data){
    $("#snd")[0].volume = 0.5;
});
$("[data-slider]").on(" slider:changed", function (e, data) {
  $("#snd")[0].volume =data.value.toFixed(1);
});

$("#bt_volume").on("click", function(){
    if ($("#snd")[0].muted){
        $("#snd")[0].muted = false;
        $(this).removeClass("fa-volume-off").addClass("fa-volume-up");
    }
    else{
        $("#snd")[0].muted =true;
        $(this).removeClass("fa-volume-up").addClass("fa-volume-off");
    }
});

$("#bt_stop").on("click", function(){
    $("#snd")[0].currentTime = 0;//처음부터 시작
    musicPLay(false);
});