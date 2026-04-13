const bot = {
    message(prompt) {
        const sentence = prompt.split(" ");    
        if(sentence[0] === "Add"){
            return Number(sentence[1]) + Number(sentence[3]);
        };
        if(sentence[0] === "Subtract"){
            return Number(sentence[3]) - Number(sentence[1]);
        }
        else {
            const hour = sentence[5].split(":")[0];
            const minute = sentence[5].split(":")[1].slice(0, 2);
            const time = sentence[5].split(":")[1].slice(2, 4);
            if(time === "pm"){
                if(Number(hour) < 6){
                    return "sunny";
                };
                if(Number(hour) === 6 && minute === "00"){
                    return "sunny";
                };
                if(Number(hour) === 12){
                    return "sunny";
                };
                return "raining";
            };
            if(time === "am"){
                if(Number(hour) === 12){
                    return "raining";
                };
                if(Number(hour) >= 6){
                    return "sunny";
                };
                return "raining";
            };
        };
    }
};

module.exports = { bot };

//https://www.codewars.com/kata/5817c0148e74302c4800039c/train/javascript