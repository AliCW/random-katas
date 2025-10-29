const validate = (number) => {

    const mapped = number.toString().split('').reverse().map((element, index) => {
        if(index % 2){
            let double = element * 2;
            if(double >= 10){
                return Number(double.toString()[0]) + Number(double.toString()[1]);
            } else {
                return Number(double);
            };
        };
        return Number(element);
    });

    const sum = mapped.reduce((acc, curr) => {
        return acc += curr;
    });

    if(sum / 10 % 1 != 0){
        return false;
    };
    return true;
};

module.exports = { validate };

//https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript