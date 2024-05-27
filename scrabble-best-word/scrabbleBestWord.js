const scrabbleBestWord = (pointsArray, wordsArray) => {
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const pointsDict = {};
    pointsArray.forEach((element, index) => {
        pointsDict[alpha[index]] = element;
    });

    const values = wordsArray.map((element) => {
        let value = 0;
        element.split('').forEach((innerElement) => {
            value += pointsDict[innerElement];
        });
        return value + "." + element.length;
    });

    const equals = values.filter((element) => {
        if(Math.floor(element) === Math.floor(Math.max(...values))) {
            return element;
        };
    });

    return values.indexOf(Math.min(...equals).toString());
};

module.exports = { scrabbleBestWord };

//https://www.codewars.com/kata/563f960e3c73813942000015/train/javascript
