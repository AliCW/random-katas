const fizzBuzzCuckooClock = (time) => {

    let output = "";
    const cuckoo = "Cuckoo ";
    const minutes = Number(time.slice(3, 5));
    const hours = Number(time.slice(0, 2));

    if (minutes % 3 === 0) {
        output += "Fizz "; //add space for 'Fizz Buzz'
    };

    if (minutes % 5 === 0) {
        output += "Buzz";
    };

    if (minutes % 5 !== 0 && minutes % 3 !== 0) {
        output += "tick";
    };

    if (minutes === 0) {
        if (hours > 12) {
            output = cuckoo.repeat(hours % 12 || 12).trim();
        }
        else {
            output = cuckoo.repeat(hours);
        };
    };

    if (minutes === 0 && hours === 0) {
        output = cuckoo.repeat(12);
    };

    if (minutes === 30) return cuckoo.trim();

    if (/[A-Za-z]/g.test(output.slice(output.length - 1, output.length)) === false) {
        return output.trim(); //remove space if output ends with a space
    };

    return output;
};

module.exports = { fizzBuzzCuckooClock };

//https://www.codewars.com/kata/58485a43d750d23bad0000e6/train/javascript