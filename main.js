time = 60;
var value = 1;
setInterval(function() {
  document.getElementById("time").innerHTML = time;
  time -= value;
},1000);

