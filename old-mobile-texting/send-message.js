const sendMessage = (string) => {
    if(string.length === 0) return "";
    const values = [" ", ".,?!", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz", "'-+="];
    
    let output = "";
    let lastIndex = NaN;
    let shift = false;
    
    if(string[0].charCodeAt() >= 65 && string[0].charCodeAt() <= 90){
        shift = true;
        output += "#";
    };

    string.split("").forEach((element) => {

        if(Number(element) >= 0 && Number(element) <= 9 && element !== " "){
            if(element === output[output.length - 1]) output += " ";
            output += element + "-";
        };
        if(element === "#" || element === "*"){
            if(element === output[output.length - 1]) output += " ";
            output += element + "-";
        };

        if(element.charCodeAt() >= 65 && element.charCodeAt() <= 90 && shift === false){
            output += "#";
            shift = true;
        };
        
        if(element.charCodeAt() >= 97 && element.charCodeAt() <= 122 && shift === true){
            output += "#";
            shift = false;
        };

        values.forEach((innerElement, innerIndex) => {
            if(innerElement.includes(element.toLowerCase())){
                if(lastIndex === innerIndex && output[output.length - 1] !== "#" && output[output.length - 1] !== "-"){
                    output += " ";
                };

                lastIndex = innerIndex;
                let indexMultiplier = innerElement.indexOf(element.toLowerCase()) + 1

                if(innerIndex >= 10){
                    output += "*".repeat(indexMultiplier);
                } else {
                    output += innerIndex.toString().repeat(indexMultiplier);
                };  
            };
        });
    });

    return output;
};

module.exports = { sendMessage };

//https://www.codewars.com/kata/5ca24526b534ce0018a137b5/train/javascript
