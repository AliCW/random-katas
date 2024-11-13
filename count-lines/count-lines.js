const countLines = (array) => {

    return array.map((element, index) => {
        return `${index + 1}: ${element}`;
    });

};

module.exports = { countLines };

//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript