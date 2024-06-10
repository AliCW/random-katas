const differenceOf2 = (array) => {
    let differences = [];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++) {
            if(array[i] - array[j] === 2){
                if(array[i] > array[j]) {
                    differences.push([array[i], array[j]]);

                }
            };
        };
    };



    differences = differences.map((element) => {
        return element.sort((a, b) => a - b);
    });

    // out = Array.from(new Set(differences.map(JSON.stringify)), JSON.parse);
    // out = out.sort((a, b) => a[0] - b[0]);
    differences = differences.sort((a, b) => a[0] - b[0]);

    console.log(differences)
    return differences;
};

module.exports = { differenceOf2 };


//https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript