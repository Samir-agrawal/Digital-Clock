function clock()
{
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period = "AM";

    // Setting AM/PM
    if(hours>=12)
        {
            period = "PM";
            
        }

    //Setting 12 hour format
    hours = hours >= 12 ? hours % 12 : hours;


    // Setting Zeroes for digit 0 to 9
    if(hours<10)
    {
        hours = "0" + hours ;
    }
    if(minutes<10)
    {
        minutes = "0" + minutes ;
    }
    if(seconds<10)
    {
        seconds = "0" + seconds ;
    }


    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;


}

var updateClock = setInterval(clock,1000);

var today = new Date();
var dayNumber = today.getDate();
var year = today.getFullYear();
var dayName = today.toLocaleString("default",{weekday:"long"});
var monthName = today.toLocaleString("default",{month:"short"});

document.querySelector(".month").innerHTML = `${monthName},`;
document.querySelector(".day").innerHTML = dayName;
document.querySelector(".date").innerHTML = `${dayNumber},`;
document.querySelector(".year").innerHTML = year;

// Javascript for format changing menu