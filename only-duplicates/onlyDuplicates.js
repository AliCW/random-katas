const onlyDuplicates = (string) => {
    const counts = {};

    string.split('').forEach((element) => {
        if(counts[element] !== undefined){
            counts[element]++;
        } else {
            counts[element] = 1;
        };
    });

    let output = '';
    for(let i = 0; i < string.length; i++){
        if(counts[string[i]] > 1){
            output += string[i];
        };
    };

    return output;
};

module.exports = { onlyDuplicates };

//https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript