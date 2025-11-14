const catchThief = (string) => {

    let queue = string;
    let count = 0;

    for(let i = 0; i < queue.length; i++){

        if(Number(queue[i]) >= 1){
            let startIndex = 0;
            let endIndex = 0;
            if(i - Number(queue[i]) > 0){
                startIndex = i - Number(queue[i]);
            };
            if(i + Number(queue[i]) > queue.length){
                endIndex = queue.length;
            } else {
                endIndex = i + Number(queue[i]);
            };

            queue = queue.split('').map((element, index) => {
                if(index >= startIndex && index <= endIndex){
                    if(element === "X"){
                        count++;
                        return "#";
                    };
                    return element;
                };
                return element;
            }).join('');
        };
    };
    return count;
};

module.exports = { catchThief };

//https://www.codewars.com/kata/5954584610080b7252000003/train/javascript

