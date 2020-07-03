
window.onload = function(){
    countUp("Jan 1, 1894 23:10:09",'timer1');
    countUp("Jan 1, 1898 14:50:11", 'timer2');
    countUp("Oct 4, 1902 03:16:13", 'timer3');
    countUp("Sep 28, 1951 05:17:24" , 'timer4');
    countUp("Mar 27, 1968 16:28:18" , 'timer5');
    countUp("Jul 9, 1982 08:27:12" , 'timer6');
    countUp("Jun 8, 1984 17:34:10" , 'timer7');
    countUp("Jul 3, 1991 12:00:00" , 'timer8');
    countUp("Apr 3, 2001 23:45:05" , 'timer9');
    countUp("Nov 22, 2016 14:04:07" , 'timer10');
    countUp("Jun 25, 2019 12:10:09" , 'timer11');
};

function countUp(countFrom, id){
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
            countFrom = new Date(countFrom),
            timeDifference = (now - countFrom);
    
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
    
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    years = Math.floor(days / 365);
    if (years > 1){ days = days - (years * 365) }
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    document.getElementById(id).innerHTML = years +':'+days+':'+ hours+':'+ mins +':'+secs;

    countUp.interval = setTimeout(function(){ countUp(countFrom, id);}, 1000);

}

