//#snd 접근법
// $("#snd") -> jQuery
// document.getElementById("snd") -> ES5
// document.querySelector("#snd") -> ES6

/* 
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
*/


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