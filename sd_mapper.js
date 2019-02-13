'use strict';
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Christopher Kim
   Date:   2.13.19

*/

var thisTime = new Date("February 3, 2018 03:18:28");

var timeStr = thisTime.toLocaleString();

document.getElementById("timeStamp").innerHTML = timeStr;

var thisHour = thisTime.getHours();

var thisMonth = thisTime.getMonth();