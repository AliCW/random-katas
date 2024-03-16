const isValidIPv4 = (str) => {

    const arrIP = str.split('.');
    
    if(arrIP.length !== 4) return false;

    for(let i = 0; i < arrIP.length; i++) {

        if(!/[0-9]/g.test(arrIP[i])) return false;
        if(Number(arrIP[i]) < 0 || Number(arrIP[i]) > 255) return false;

        if(arrIP[i].length > 1) {
            if(!/[1-9]/g.test(arrIP[i].charAt(0))) return false;
            if(!/[1-9]/g.test(arrIP[i].charAt(0)) && !/[1-9]/g.test(arrIP[i].charAt(1))) return false;
            if(/[\s]/g.test(arrIP[i])) return false;
            if(/[A-Za-z]/g.test(arrIP[i])) return false;
        };
    };

    return true;
    
};

module.exports = { isValidIPv4 };

//https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript
