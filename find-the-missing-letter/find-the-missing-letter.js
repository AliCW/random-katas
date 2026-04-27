const findMissingLetter = (array) => {
    let previous = array[0];

    for(let i = 1; i <= array.length; i++){
        if(array[i].charCodeAt() - previous.charCodeAt() !== 1){
            const code = array[i].charCodeAt() - 1;
            return String.fromCharCode(code);
        };
        previous = array[i];
    };
};

module.exports = { findMissingLetter };

//https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
