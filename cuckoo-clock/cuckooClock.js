const cuckooClock = (time, chimes) => {

    mins = time.slice(3, 5);
    hours = time.slice(0, 2);

    if(mins === "00") chimes = chimes - Number(hours);
    if(mins === "15" || mins === "30" || mins === "45") chimes--;
    if(chimes <= 0) return time;

    do {
        if(Number(mins) + 15 >= 60) {
            if(Number(hours) + 1 > 12) hours = 1;
            else { hours = Number(hours) + 1; };
            chimes = chimes - Number(hours);
            mins = Number(mins) + 15;
            mins = Number(mins.toString().charAt(0)) - 6 + mins.toString().charAt(1);
        } else {
            chimes--;
            mins = Number(mins) + 15;
        };
    } while (chimes > 0);

    if(mins >= 0 && mins <= 14) mins = "00";
    if(mins >= 15 && mins <= 29) mins = "15";
    if(mins >= 30 && mins <= 44) mins = "30";
    if(mins >= 45 && mins <= 59) mins = "45";
    
    if(typeof hours === "string") return hours + ":" + mins;
    else { if(Number(hours) < 10) hours = "0" + hours; };
        return hours + ":" + mins;
};

module.exports = { cuckooClock };

//https://www.codewars.com/kata/656e4602ee72af0017e37e82/train/javascript