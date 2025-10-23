const bowlingScore = (array) => {

    let turnScore = 0;
    let turns = 0;

    let strikeCount = 0;
    let strike = false;
    let spare = false;

    return array.reduce((acc, curr, index) => {

        turnScore += curr
        turns++
        console.log(acc, "check process & track where the error is")
        if(turns > 20){

            if(strike === true){
                return acc += curr * 2
            }
        }
        if(strike === true && turns <= 19 && curr !== 10){
            turns++
            return acc += curr * 2
        }
        
        if(curr !== 10){
            
            strike = false;
            strikeCount = 0;
        };
        if(curr === 10){
            
            strikeCount++;
            turns++;
            if(strike === true && strikeCount >= 3){
                strike = true;
                return acc += 30
            }
            if(strike === true){
                return acc += 20
            } 

            else {
                strike = true;
                return acc += curr
            }
        }



        if(spare === true){ //<-- apply spare
            spare = false;
            if(index + 1 === array.length - 1){ //<-- final shot as spare
                return acc += array[index - 1] += array[index - 1]
            }
            return acc += array[index - 1]
        }

        if(turnScore === 10){ //<--get spare
            spare = true;
            turnScore = 0
            return acc += curr

        }



        return acc += curr
    })



};

module.exports = { bowlingScore };



    // let score = 0;
    // let turns = 0;
    // let curr = 0;

    // let strike = false;
    // let strikeCount = 0;
    // let spare = false;

    // for(let i = 0; i < array.length; i++){
    //     turns++
    //     curr += array[i];
    //     if(array[i] !== 10 && strike === true){ //<-- add strike scores
    //         score += array[i];
    //         score += array[i-1]
    //         strikeCount = 0
    //         continue;
    //     }
    //     if(array[i] === 10){ //<--count strikes
    //         score += 10
    //         strike += true;
    //         console.log(i, "index")
    //         if(strikeCount > 1){
    //             score += 10; 
    //         };
    //         if(strikeCount > 1 && strikeCount % 2){
    //             score += 10;
    //         }
            
    //         strikeCount++
    //         continue;
    //     }
    //     if(spare === true){ //<-- add spare scores
    //         score += array[i] * 2;
    //         spare = false;
    //         if(i === array.length - 1){ //<-- add last shot
    //             score += array[i - 1]
    //         }
    //         continue;
    //     }
    //     if(curr === 10 && turns % 2 === 0){ //<--insert spare
    //         spare = true;
    //         curr = 0;
    //         continue;
    //     }
    //     score += array[i];
    // }