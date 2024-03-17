const sort = (arr) => {

    const array = [...arr];

    for(let i = arr.length; i > -1; i--) {

        for(let j = arr.length; j > 0; j--) {

            if(array[i] >= array[j]) {
                let value = array[i];
                console.log(array[j], value)
                array.splice(i, 1);
                array.splice(j, 0, value);

            };
        };
    };

    console.log(array)

    return array;

};

module.exports = { sort };

//https://www.codewars.com/kata/52105fab0bd0ce9dd00000fe/train/javascript

