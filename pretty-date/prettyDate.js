const toPretty = (seconds) => {
    if (seconds === 0) return 'just now';

    let time = seconds;
    let secs = 0;
    let minutes = 0;
    let hours = 0;
    let days = 0;
    let weeks = 0;

    do{
        if(time <= 60) {
            secs += time;
            time -= secs;
        };
        if(time >= 61 && time < 3600) {
            minutes += time;
            time -= minutes;
        };
        if(time >= 3600 && time < 86400) {
            hours += time;
            time -= hours;
        };
        if(time >= 86400 && time < 604800) {
            days += time;
            time -= days;
        };
        if(time >= 604800){
            weeks += time;
            time -= weeks;
        };

    } while (time > 0);

    let secondString = '';
    let minuteString = '';
    let hourString = '';
    let dayString = '';
    let weekString = '';

    minutes = minutes / 60;
    hours = hours / 3600;
    days = days / 86400;
    weeks = weeks / 604800;

    if(weeks < 2) {
        weekString += 'a week ago';
    } else {
        weekString += `${Math.trunc(weeks)} weeks ago`;
    };

    if(days < 2) {
        dayString += 'a day ago';
    } else {
        dayString += `${Math.trunc(days)} days ago`;
    };

    if(hours < 2) {
        hourString += 'an hour ago';
    } else {
        hourString += `${Math.trunc(hours)} hours ago`;
    };

    if(minutes < 2) {
        minuteString += 'a minute ago';
    } else {
        minuteString += `${Math.trunc(minutes)} minutes ago`;
    };

    if(secs === 1) {
        secondString += 'a second ago';
    } else {
        secondString += `${secs} seconds ago`;
    };

    if(weeks > 0) return weekString;
    if(days > 0) return dayString;
    if(hours > 0) return hourString;
    if(minutes > 0) return minuteString;
    if(secs > 0) return secondString;

};

module.exports = { toPretty };

//https://www.codewars.com/kata/53988ee02c2414dbad000baa/train/javascript