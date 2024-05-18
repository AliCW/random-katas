const findMissing = (array1, array2) => {
    const sort1 = [...array1].sort((a, b) => { return a - b;} );
    const sort2 = [...array2].sort((a, b) => { return a - b;} );
    
    for(let i = 0; i < sort1.length; i++){
        if(sort1[i] !== sort2[i]){
            return sort1[i];
        };
    };
};

module.exports = { findMissing };


//sort both arrays -
//start loop - when [i] on each array differs, return arr1[i]