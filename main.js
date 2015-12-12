time = 60;
var value = 1;
setInterval(function() {
  time -= value;
},1000);
document.getElementById("time").innerHTML = time;
