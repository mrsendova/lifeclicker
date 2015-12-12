time = 60; //the time the player have before game over
var timeChange = 1; //the time being lost every second
window.setInterval(function(){
  time -= timeChange
}, 1000); //substractin timeChange from time every second
window.setInterval(function(){
  document.getElementById("time").innerHTML = time;
}, 1000); //updating time every second
