/**
 * thedolab.js: Javascript File for TheDoLab Site 
 * Author: Timothy Do
 */

//toggles between dark and light mode
function toggleMode() {
    //gets intial objects & state
    var button = document.querySelector('button');
    var body = document.querySelector('body');
    var space = button.innerHTML;
    var isDark = space == '🌕';

    //toggles between sun and moon
    button.innerHTML = isDark ? '☀️' : '🌕';

    //turn into light mode if previously dark
    if(isDark) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        button.style.backgroundColor = "black";
    }
    else { //turn into dark mode if previously light
        body.style.backgroundColor = "black";
        body.style.color = "white";
        button.style.backgroundColor = "black";
    }


}

//function for updating time for TheDoLab
function updateTime() {

    //initial date
    var d = new Date();

    //localizing to PST
    var offset = d.getTimezoneOffset()/60;
    var delPST = offset - 8;
    var localhour = d.getHours();
    var hour = localhour + delPST;
    //puts it back if timezone is ahead
    if(hour < 0) {
    	hour = hour + 24;
    }

    //minutes and seconds
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var meridiem;
    var localmeridiem;

    //formatting to AM/PM
    var labtime = document.getElementById("labtime");
    var localtime = document.getElementById("localtime");
    if(minutes < 10) {
        minutes = '0' + minutes;
    }
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    if(hour < 12) {
        if(hour == 0) {
            hour += 12;
        }
        else if(hour < 10) {
            hour = '0' + hour;
        }
        meridiem = "AM";
    }
    else if(hour >= 12) {
        if(hour != 12) {
            hour -= 12;
            if(hour < 10) {
                hour = '0' + hour;
            }
        }
        meridiem = "PM";
    }
    if(localhour < 12) {
        if(localhour == 0) {
            localhour += 12;
        }
        else if(localhour < 10) {
            localhour = '0' + localhour;
        }
        localmeridiem = "AM";
    }
    else if(localhour >= 12) {
        if(localhour != 12) {
            localhour -= 12;
            if(localhour < 10) {
                localhour = '0' + localhour;
            }
        }
        localmeridiem = "PM";
    }

    sign = -delPST >= 0 ? "+" : "";

    //updating element
    labtime.innerHTML = "TheDoLab Local Time: " + hour + ":" +  minutes + ":" + seconds + " " + meridiem + " PST ";
    localtime.innerHTML = "Your Local Time: " + localhour + ":" + minutes +  ":"  + seconds + " " + localmeridiem + " (" + sign + -delPST + ")";

    //repeat
    setTimeout(updateTime, 1000);
}

