const bowlingScore = (array) => {

    let score = 0;
    let turns = 0;
    let curr = 0;

    let strike = false;
    let strikeCount = 0;
    let spare = false;

    for(let i = 0; i < array.length; i++){
        turns++
        curr += array[i];
        if(array[i] !== 10 && strike === true){ //<-- add strike scores
            score += array[i];
            score += array[i-1]
            strikeCount = 0
            continue;
        }
        if(array[i] === 10){ //<--count strikes
            score += 10
            strike += true;
            console.log(i, "index")
            if(strikeCount > 1){
                score += 10; 
            };
            if(strikeCount > 1 && strikeCount % 2){
                score += 10;
            }
            
            strikeCount++
            continue;
        }
        if(spare === true){ //<-- add spare scores
            score += array[i] * 2;
            spare = false;
            if(i === array.length - 1){ //<-- add last shot
                score += array[i - 1]
            }
            continue;
        }
        if(curr === 10 && turns % 2 === 0){ //<--insert spare
            spare = true;
            curr = 0;
            continue;
        }
        score += array[i];
    }

    return score


};

module.exports = { bowlingScore };