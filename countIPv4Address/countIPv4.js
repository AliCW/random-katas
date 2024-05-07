const countIPv4 = (start, end) => {
    let count = 0;
    for(let i = 0; i < 4; i++) {
        let multiply = Number(end.split('.')[i]) - Number(start.split('.')[i]);
        if(i === 0) count += multiply * 16777216;
        if(i === 1) count += multiply * 65536;
        if(i === 2) count += multiply * 256;
        if(i === 3) count += multiply;
    };
    return count;
};


module.exports = { countIPv4 };

//https://www.codewars.com/kata/526989a41034285187000de4/train/javascript