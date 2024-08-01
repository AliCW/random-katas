const countRepeatLetters = (string) => {
    let count = 0;
    for(let i = 0; i < string.length - 1; i++){
        if(string[i] === string[i + 1]){
            count++;
        };
    };

    return count;
};

module.exports = { countRepeatLetters };


//https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061/train/javascript