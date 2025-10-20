const mirror = (string) => {

    let longestIndex = 0;
    const split = string.split(' '); //split on word, not letter

    split.forEach((element) => {
        if (element.length > longestIndex){
            longestIndex = element.length;
        };
    });

    let output = [];

        for(let i = 0; i < split.length; i++){ //loop through sentence / word by each word
            let reverse = split[i].split('').reverse().join(''); //reverses the word
            if(reverse.length < longestIndex){ 
                let numberOfSpaces = longestIndex - reverse.length;
                let spaces = ` `.repeat(numberOfSpaces);
                reverse = reverse.concat(spaces); //fills spaces if needed
            };
            output.push(`* ${reverse} *\n`);
            if(i === split.length - 1){
                output.unshift('\n');
            };
        };

    const frame = '*'.repeat(longestIndex + 4);
    output.unshift(frame);
    output.push(frame);

    return output.join('');
};

module.exports = { mirror };

//https://www.codewars.com/jata/581331293788bc1702001fa6/train/javascript