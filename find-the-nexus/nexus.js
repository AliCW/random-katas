const nexus = (object) => {
    const check = [];

    for (let key in object) {
        if(object[key] === Number(key)) return Number(key);

        let difference = object[key] - Number(key);
        if(difference < 0) difference = -difference;
        check.push(difference);
    };
    
    return Number(Object.keys(object)[check.indexOf(Math.min(... check))]);
};

module.exports = { nexus };

//https://www.codewars.com/kata/5453dce502949307cf000bff/train/javascript