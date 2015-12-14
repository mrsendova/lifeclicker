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

function refreshData(a){
  document.getElementById("a").innerHTML = a;
}

setInterval(function() {
  time -= timeChange;
  refreshData(time);
},1000); //substractin timeChange from time every second

function buttonClicked(){
  time += 1;
  refreshData(time);
}
