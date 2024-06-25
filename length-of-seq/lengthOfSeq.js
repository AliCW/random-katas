const lengthOfSeq = (array, number) => { 
    if(array.length <= 1 || !array.includes(number)) return 0;    
    
    instances = 0;
    seq = [];
    array.forEach((element, index) => {
        if(element === number) {
            instances++;
            seq.push(index);
        };
    });
    if(instances !== 2) return 0;

    return seq[1] - seq[0] + 1;
};

module.exports = { lengthOfSeq };

//https://www.codewars.com/kata/5566b0dd450172dfc4000005/train/javascript