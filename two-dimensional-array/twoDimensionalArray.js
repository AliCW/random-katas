const matrix = (array) => {

    const output = [...array].map((outerElement, outerIndex) => {
        return outerElement.map((innerElement, innerIndex) => {
            if(innerIndex === outerIndex && innerElement > -1) {
                return 1;
            };
            if(innerIndex === outerIndex && innerElement < 0) {
                return 0;
            };
            return innerElement;
        });
    });

    return output;
};

module.exports = { matrix };

//https://www.codewars.com/kata/581214d54624a8232100005f/train/javascript