const balanced = (array) => {

    if (array.length <= 3){
        let unique = [...new Set(array)];
        if(unique.length === 1) {
          return true;
        } return false; 
      };     

    if (array.length % 2 === 0) {
        const left = [...array.slice(0, array.length / 2)];
        const right = [...array.slice(array.length / 2, array.length)];
    
        if(left.join() === right.join()) {
            return true;
        } else {
            for(let i = 0; i < array.length - 1; i++) {
                if(array[i] === array[i + 1]) {
                    return false;
                }
            }
            return true;
        }

    } else {
        const left = [...array.slice(0, array.length / 2)];
        const right = [...array.slice(array.length / 2 + 1, array.length)];

        //console.log(left % 2 === 0, left)

        if(left.length % 2 === 0) {
            console.log(left, right, left.join() === right.join())

        } else {
            if(left.join() === right.join()) {
                return true;
            } return false;

        }


    }


    //if odd, split on middle and count the length
    //if odd, compare and return true if equals

};

module.exports = { balanced };