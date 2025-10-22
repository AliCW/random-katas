const bowlingScore = (array) => {

    let score = 0;
    let turns = 0;
    let curr = 0;

    let strike = 0;
    let spare = false;

    for(let i = 0; i < array.length; i++){
        turns++
        curr += array[i];
        if(array[i] === 10){
            strike += 1;
        }
        if(array[i] === 10 && strike >= 1){
            if(strike > 1){
                score += 10
            }
            if(strike === 1){
                score += array[i]
                // score += array[i - 1]
            }
        }
        if(spare === true){
            console.log(array[i])
            score += array[i] * 2;
            spare = false;
            if(i === array.length - 1){
                score += array[i - 1]
            }

            continue;
        }
        if(curr === 10 && turns % 2 === 0){ //<--spare
            spare = true;
            curr = 0;
            continue;
        }
        score += array[i];
    }

    return score


};

module.exports = { bowlingScore };