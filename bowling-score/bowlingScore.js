const bowlingScore = function(array) {
  let score = 0;
  let i = 0;
  let frame = 1;
  
  do {

    score += array[i] + array[i + 1];

    if(array[i] + array[i + 1] >= 10) {
        score += array[i + 2];
    };
    if(array[i] !== 10){
        i++;
    };

    i++;
    frame++;

  } while(frame <= 10);

  return score;
};


module.exports = { bowlingScore };