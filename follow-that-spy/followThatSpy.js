const findRoutes = (array) => {

    //console.log(array)

    let dict = {}

    let startEnd = []
    let middle = []

    array.forEach((element, i) => {
        element.forEach((location) => {
            if(dict[location] === undefined){
                dict[location] = 1
            } else {
                dict[location] += 1
            }
        })
    })

    for(let key in dict){
        if(dict[key] === 1){
            startEnd.push(key)
        };
    }

    const isStart = (element) => element[0] === startEnd[0]

    let indices = array.findIndex(isStart)


    
    console.log(array[indices])

    

    for(let i = 0; i < array.length - 1; i++){
        middle.push(array[indices][1] + ", ")
        let find = array[indices][1]
        const findNext = (element) => element[0] === find

        indices = array.findIndex(findNext)
    }




    
    return startEnd[0] + ", " + middle.join('') + startEnd[1];
};

module.exports = { findRoutes };


//https://www.codewars.com/kata/5899a4b1a6648906fe000113/train/javascript



//find the start - the single count & first instance

//after finding the start - get the index, the 2nd element in that index will be 2nd place
//find the next index of 2nd place, the 2nd element is the next place - & go on until the end?
