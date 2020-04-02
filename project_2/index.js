
window.onload = function(){
    countUp("Jan 1, 1894 12:00:00",'timer');
    countUp("Jan 1, 1898 12:00:00", 'timer2');
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

