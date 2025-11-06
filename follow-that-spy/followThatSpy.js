const findRoutes = (array) => {
    let start = "";
    const middle = [];
    let end = "";
    const dict = {};

    array.forEach((element) => {
        element.forEach((location, j) => {
            if(dict[location] === undefined){
                dict[location] = {
                    "count": 1,
                    "index": j,
                };
            } else {
                dict[location]["count"] += 1;
            };
        });
    });

    for(let key in dict){
        if(dict[key]["count"] === 1 && dict[key]["index"] === 0){ //<start is always listed first
            start = key;
        };
        if(dict[key]["count"] === 1 && dict[key]["index"] === 1){
            end = key;
        };
    };

    const isStart = (element) => element[0] === start;
    let indices = array.findIndex(isStart); //<find initial destination, path is from left to right

    for(let i = 0; i < array.length - 1; i++){
        middle.push(array[indices][1] + ", ");

        const findNext = (element) => element[0] === array[indices][1]; //<use same logic to find the path
        indices = array.findIndex(findNext);
    };
    
    return start + ", " + middle.join("") + end;
};

module.exports = { findRoutes };


//https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/javascript
