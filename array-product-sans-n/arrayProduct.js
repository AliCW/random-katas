const arrayProduct = (numbers) => {
    let inputArray = [...numbers];

    if(numbers.length === 2){
        inputArray.reverse();
        inputArray = inputArray.map((element) => {
            return BigInt(element);
        });
        return inputArray;
    };


    let product = inputArray.reduce((a, b) => {
        return a * b;
    });

    //console.log(product);

    let overZero = false;

    if(product === -0) {

        for(let i = 0; i < inputArray.length; i++){
            if(inputArray[i] > 0) overZero = true;
        }

        if(overZero === true) {
            //final test breaking here
            return [];
            }


         else if (overZero === false) {
            product = 0;
            inputArray = inputArray.map(() => {
                return BigInt(product);
            });
            return inputArray;
        }
        
    };

    const output = inputArray.map((element) => {
        return BigInt(product / element);
    });

    return output;
};

module.exports = { arrayProduct };