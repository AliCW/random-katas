const lengthOfSeq = (array, number) => { // a bit bloated
    if(array.length <= 1 || !array.includes(number)) return 0;    
    
    instances = 0;
    array.forEach((element) => {
        if(element === number) instances++;
    });
    if(instances > 2) return 0;
    
    count = 1;
    startCounting = false;
    for(let i = 0; i < array.length; i++){
        if(array[i] === number & startCounting === true) break;
        if(array[i] === number) startCounting = true;
        if(startCounting === true) count++;     
    };
    return count;

};

module.exports = { lengthOfSeq };

//https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/javascript