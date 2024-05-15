const detectPangram = (string) => {
    const alpha = "abcdefghijklmnopqrstuvwxyz".split('');

    for(let i = 0; i < alpha.length; i++){
        if(string.toLowerCase().indexOf(alpha[i]) < 0) return false;
    };
    return true;
};

module.exports = { detectPangram };

//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript