/* Copyright 2015 Raphaël M-P & Timothée Montcalm

This file is part of LifeClicker.

LifeClicker is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

Foobar is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with LifeClicker.  If not, see <http://www.gnu.org/licenses/>.
*/

var time = 60; //the time the player have before game over
var timeChange = 1; //the time being lost every second
var clickPower = 1;

function checkTime(){
  if (time <= 0) {
    time = 120;
    alert("you suck... here's 2 minutes for your troubles.");
  }
}

function refreshTime(newTime){
  document.getElementById("time").innerHTML = newTime;
}

setInterval(function() {
  time -= timeChange;
  refreshTime(time);
  checkTime();
},1000); //substractin timeChange from time every second

function buttonClicked(){
  time += clickPower;
  refreshTime(time);
}

//from now on upgradeClickPower will be shorten in ucp except for the name of the function
//from now on incrementation will be shorten in inc which will not stand for incorporated like the usual contraction does
ucpPrice = 10; //the price of the upgrade
ucpPriceInc = 10 //the number of % the price goes up every time the upgrade is bought

function upgradeClickPower(){
  time -= ucpPrice;
  refreshTime(time);
  ucpPrice = Math.round(ucpPrice*(ucpPriceInc/100+1));
  clickPower += 1;
  document.getElementById("ucpPrice").innerHTML = ucpPrice;
  document.getElementById("clickPower").innerHTML = clickPower;
  checkTime();
}
