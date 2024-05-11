const diff = (array1, array2) => {

    const arr1 = array1.filter((element) =>  { return !array2.includes(element) });
    const arr2 = array2.filter((element) =>  { return !array1.includes(element) });
    return [... new Set (arr1.concat(arr2))].sort();

};

module.exports = { diff };


//const diff = (array1, array2) => { //<<<<<<<<<<<----------------- Loop approach
    // const arr1 = [... new Set(array1)];
    // const arr2 = [... new Set(array2)];
    // const differences = [];
    
    // for(let i = 0; i < arr1.length; i++) {
    //     if(!arr2.includes(arr1[i])) differences.push(arr1[i]);
    // };
    // for(let j = 0; j < arr2.length; j++){
    //     if(!arr1.includes(arr2[j])) differences.push(arr2[j]);
    // };
    
    // return differences.sort();

//};