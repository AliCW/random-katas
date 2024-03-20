const goodVsEvil = (good, evil) => {

    let goodArr = good.split(' ');
    let evilArr = evil.split(' ');

    goodArr = goodArr.map((element, index) => {
        if(index === 0) return Number(element)
        if(index === 1) return Number(element) * 2;
        if(index === 2) return Number(element) * 3;
        if(index === 3) return Number(element) * 3;
        if(index === 4) return Number(element) * 4;
        if(index === 5) return Number(element) * 10;
    });

    evilArr = evilArr.map((element, index) => {
        if(index === 0) return Number(element)
        if(index === 1) return Number(element) * 2;
        if(index === 2) return Number(element) * 2;
        if(index === 3) return Number(element) * 2;
        if(index === 4) return Number(element) * 3;
        if(index === 5) return Number(element) * 5;
        if(index === 6) return Number(element) * 10;
    });

    const goodNum = goodArr.reduce((acc, curr) => 
        acc + curr, 0,
    );

    const evilNum = evilArr.reduce((acc, curr) => 
    acc + curr, 0,
    );

    if(goodNum > evilNum) {
        return 'Battle Result: Good triumphs over Evil';
    } else {
        if(goodNum < evilNum) {
            return 'Battle Result: Evil eradicates all trace of Good';
        } else {
            return 'Battle Result: No victor on this battle field';
        };
    };
};

module.exports = { goodVsEvil };

//https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

