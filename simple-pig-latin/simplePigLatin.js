const pigIt = (str) => {
    let wordArray = str.split(" ");
    wordArray = wordArray.map((word) => {
        if(/[\!\£\"\$\%\^\&\*\(\)\-\_=\+\[\]\{\}\;\:\'\@\#\~\,\.\<\>\/\?\|\¬\`]/g.test(word.charAt(0))) {
            return word;
        };
        let split = word.split("");
        const first = word.charAt(0);

        split.splice(word.length, 0, first, "ay");
        split.shift();
        return split.join("");
    });

    return wordArray.join(" ");
};

module.exports = { pigIt };

//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript