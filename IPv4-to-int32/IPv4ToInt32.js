const ipToInt32 = (addressString) => {

    let out = addressString.split('.').reduce((increment, current) => {
        return (increment << 8) + parseInt(current, 10);
    }, 0);

    return out >>> 0;
};

module.exports = { ipToInt32 };

//https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/javascript