/* Copyright 2015 Raphaël M-P & Timothée Montcalm
*/

var time = 60; //the time the player have before game over
var timeChange = 1; //the time being lost every second

function changeTime(newtime){
  document.getElementById("time").innerHTML = newtime;
}

setInterval(function() {
  time -= timeChange;
  changeTime(time);
},1000); //substractin timeChange from time every second

function buttonClicked(){
  time += 1;
  changeTime(time);
}
