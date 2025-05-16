const multiplesOfThreeAndFive = (number) => {
    let output = 0;
    
    for(let i = 3; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            output += i;
        };
    };
    return output;

};

module.exports = { multiplesOfThreeAndFive };

//https://www.codewars.com/kata/54bb6ee72c4715684d0008f9/train/javascript

